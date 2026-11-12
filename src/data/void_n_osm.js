/**
 * Fabric Extension N (Cempaka Putih-Rawasari-Pulomas-Jatinegara) road and canal geometry derived from OpenStreetMap.
 * Source: OpenStreetMap contributors, ODbL. Retrieved 2026-11-12 via Overpass API.
 * Coordinates projected with projectGpsToScene (Bundaran HI origin, 14100 x 14180), clipped to meta.clipBox.
 * No new anchors: fills the internal coverage hole between core OSM, Void J, Void F, and Void L.
 */
export const VOID_N_OSM = {
  "meta": {
    "source": "OpenStreetMap contributors (ODbL)",
    "retrieved": "2026-11-12",
    "bbox": {
      "south": -6.234449242595204,
      "west": 106.84553026950354,
      "north": -6.151586055007051,
      "east": 106.89113310638298
    },
    "projection": "projectGpsToScene (Bundaran HI origin, 14100 x 14180)",
    "clipBox": {
      "minX": 317,
      "maxX": 960,
      "minZ": -615,
      "maxZ": 560
    },
    "note": "Fabric Extension N (Cempaka Putih-Rawasari-Pulomas-Jatinegara): jaringan OSM tanpa anchor baru. Kurasi: arterial semua, tertiary bernama, lokal bernama >=30u, link bernama; air bernama/river/canal; waterBodies >=300u2; RDP 0.5u. seamCore = subset jalan/air core jakarta_osm.json di tepi barat x=317, polyline dipecah di seam, hanya untuk matcher seam (tidak dirender)."
  },
  "roads": [
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          735.2,
          -38.8
        ],
        [
          734.8,
          -36.7
        ]
      ]
    },
    {
      "name": "Jalan Dokter Saharjo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          346,
          205.4
        ],
        [
          340.5,
          215.7
        ],
        [
          317,
          250.9
        ]
      ]
    },
    {
      "name": "Jalan Tambak",
      "type": "primary",
      "width": 18,
      "points": [
        [
          371.2,
          124.5
        ],
        [
          365,
          161.6
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          634.5,
          372.7
        ],
        [
          633.7,
          400.7
        ],
        [
          628.4,
          411.4
        ]
      ]
    },
    {
      "name": "Jalan Proklamasi",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          326.9,
          103.4
        ],
        [
          363.5,
          108.7
        ]
      ]
    },
    {
      "name": "Jalan Tebet Utara I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          414.6,
          497
        ],
        [
          417.5,
          479.3
        ],
        [
          419.8,
          450.7
        ],
        [
          414.3,
          431.1
        ],
        [
          414.2,
          420.7
        ],
        [
          413.3,
          418.9
        ]
      ]
    },
    {
      "name": "Jalan Tebet Barat IV",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          388.7,
          550.2
        ],
        [
          367.1,
          553
        ],
        [
          344.6,
          553.2
        ]
      ]
    },
    {
      "name": "Jalan Tebet Barat I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          374.8,
          492.5
        ],
        [
          370.8,
          505.5
        ],
        [
          368.4,
          522.2
        ],
        [
          367.1,
          536.6
        ],
        [
          367.1,
          553
        ]
      ]
    },
    {
      "name": "Jalan Tebet Timur Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          414.6,
          497
        ],
        [
          423.3,
          549.8
        ],
        [
          425.7,
          560
        ]
      ]
    },
    {
      "name": "Jalan Tebet Utara Dalam",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          452,
          427.9
        ],
        [
          448.6,
          435.8
        ],
        [
          448.2,
          448.4
        ],
        [
          450.2,
          464.2
        ],
        [
          453.9,
          475
        ]
      ]
    },
    {
      "name": "Jalan Tebet Timur Dalam II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          457.8,
          526.3
        ],
        [
          471.8,
          494.4
        ]
      ]
    },
    {
      "name": "Jalan Tebet Timur Dalam Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          419.8,
          527.7
        ],
        [
          436.6,
          524.3
        ],
        [
          450.4,
          523.2
        ],
        [
          467.9,
          531.4
        ],
        [
          472.6,
          535.4
        ],
        [
          474.9,
          538.5
        ],
        [
          476.8,
          543
        ],
        [
          478.1,
          560
        ]
      ]
    },
    {
      "name": "Jalan Dokter Saharjo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          344.6,
          402.7
        ],
        [
          333.4,
          380.9
        ],
        [
          322.8,
          364.3
        ],
        [
          317,
          348.3
        ]
      ]
    },
    {
      "name": "Jalan Tebet Barat VIII",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          359.1,
          553.2
        ],
        [
          359,
          560
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          358,
          186.4
        ],
        [
          358.6,
          185.7
        ],
        [
          357.8,
          184.8
        ]
      ]
    },
    {
      "name": "Jalan Dokter Saharjo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          363.8,
          185.9
        ],
        [
          362.2,
          187.6
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Utara II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          364.8,
          183.2
        ],
        [
          371.9,
          192.5
        ],
        [
          374.8,
          197.8
        ]
      ]
    },
    {
      "name": "Jalan Borobudur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          353.1,
          72
        ],
        [
          338.3,
          89.4
        ],
        [
          337.1,
          89.5
        ],
        [
          334.7,
          88.1
        ],
        [
          322.8,
          100.4
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          376.6,
          104.8
        ],
        [
          382.8,
          100.5
        ]
      ]
    },
    {
      "name": "Jalan Kramat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          330,
          -83.9
        ],
        [
          326.8,
          -89.5
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          382.6,
          7.7
        ],
        [
          388.5,
          16.8
        ],
        [
          399.2,
          28
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          355,
          -38.4
        ],
        [
          350.5,
          -46.6
        ]
      ]
    },
    {
      "name": "Flyover Pramuka Salemba",
      "type": "primary",
      "width": 18,
      "points": [
        [
          457.5,
          44.6
        ],
        [
          439.2,
          58.2
        ],
        [
          434.3,
          59.8
        ],
        [
          431.3,
          59.4
        ],
        [
          428.4,
          57.9
        ],
        [
          411.8,
          42.7
        ]
      ]
    },
    {
      "name": "Flyover Pramuka Matraman",
      "type": "primary",
      "width": 18,
      "points": [
        [
          462.6,
          42.4
        ],
        [
          443.5,
          56.5
        ],
        [
          409.2,
          85.9
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Utara I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          428.9,
          266.4
        ],
        [
          420.5,
          256.2
        ],
        [
          402.8,
          231.9
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          620,
          293.1
        ],
        [
          652.9,
          289.4
        ],
        [
          667.8,
          289.4
        ],
        [
          684.4,
          286.6
        ],
        [
          703.7,
          286.1
        ]
      ]
    },
    {
      "name": "Jalan Otto Iskandar Dinata",
      "type": "primary",
      "width": 18,
      "points": [
        [
          625.4,
          525.4
        ],
        [
          629.4,
          560
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          607.2,
          407.6
        ],
        [
          596,
          371.9
        ],
        [
          584.6,
          347.2
        ],
        [
          579.9,
          334.3
        ],
        [
          575.7,
          303.9
        ],
        [
          571.9,
          298.9
        ],
        [
          552.7,
          281.8
        ],
        [
          548.8,
          277.4
        ],
        [
          542.1,
          264.7
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          516.7,
          210.8
        ],
        [
          481.9,
          121.9
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          666.6,
          291.6
        ],
        [
          658.1,
          290.8
        ],
        [
          624.1,
          294.6
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          601.5,
          288.1
        ],
        [
          607.2,
          291.3
        ],
        [
          609.4,
          294.9
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          739.3,
          -185.4
        ],
        [
          744.1,
          -241.9
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          696.9,
          -385.4
        ],
        [
          658.3,
          -367.6
        ]
      ]
    },
    {
      "name": "Jalan Kepu Selatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          317,
          -378.2
        ],
        [
          318.9,
          -378.9
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Timur VI",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          410.6,
          -367.2
        ],
        [
          399.7,
          -368.2
        ],
        [
          393.3,
          -367.8
        ],
        [
          369.8,
          -371.3
        ],
        [
          368.4,
          -372.9
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Timur V",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          368.4,
          -372.9
        ],
        [
          368.4,
          -327.9
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Timur III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          368.4,
          -327.9
        ],
        [
          408.5,
          -326.5
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Timur Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          325.5,
          -338.4
        ],
        [
          324.3,
          -330.1
        ]
      ]
    },
    {
      "name": "Jalan Tanah Tinggi Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          408.9,
          -333.3
        ],
        [
          410.6,
          -367.2
        ]
      ]
    },
    {
      "name": "Jalan Tanah Tinggi 12",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          403.1,
          -194.9
        ],
        [
          370.1,
          -197.3
        ],
        [
          350.8,
          -200.8
        ]
      ]
    },
    {
      "name": "Jalan Baladewa",
      "type": "residential",
      "width": 10,
      "points": [
        [
          358.7,
          -252.2
        ],
        [
          405.1,
          -250
        ]
      ]
    },
    {
      "name": "Jalan Tanah Tinggi I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          329.7,
          -243.4
        ],
        [
          332.7,
          -230.8
        ],
        [
          334.5,
          -208.9
        ]
      ]
    },
    {
      "name": "Jalan Kramat Pulo Gundul",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          397,
          -120.7
        ],
        [
          363.3,
          -165.4
        ]
      ]
    },
    {
      "name": "Jalan Kembang Pacar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          332.7,
          -198
        ],
        [
          327.7,
          -191.6
        ],
        [
          317,
          -181.7
        ]
      ]
    },
    {
      "name": "Jalan Kramat Pulo",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          317,
          -176.4
        ],
        [
          317,
          -173.2
        ]
      ]
    },
    {
      "name": "Jalan Dahlia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          320,
          -242.4
        ],
        [
          328.4,
          -211.3
        ],
        [
          327.9,
          -209.6
        ]
      ]
    },
    {
      "name": "Jalan Kembang Sepatu",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          327.9,
          -209.6
        ],
        [
          317,
          -225
        ]
      ]
    },
    {
      "name": "Jalan Kramat Pulo Dalam II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          337.1,
          -173.4
        ],
        [
          342.2,
          -147
        ],
        [
          357.4,
          -107.6
        ]
      ]
    },
    {
      "name": "Jalan Kramat Sentiong",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          328.1,
          -93.7
        ],
        [
          371.5,
          -113.5
        ],
        [
          375.3,
          -114.3
        ],
        [
          383.8,
          -112.8
        ],
        [
          386.6,
          -113.5
        ],
        [
          392.6,
          -116.8
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          790.5,
          -406
        ],
        [
          780.2,
          -382.2
        ]
      ]
    },
    {
      "name": "Jalan Perintis Kemerdekaan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          790.4,
          -405.8
        ],
        [
          792.5,
          -405.3
        ]
      ]
    },
    {
      "name": "Jalan Balap Sepeda",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          960,
          -67
        ],
        [
          959.7,
          -76.5
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          660.8,
          -38.5
        ],
        [
          603.7,
          -32.8
        ],
        [
          588.1,
          -30
        ],
        [
          567,
          -23.5
        ],
        [
          554.1,
          -17.3
        ]
      ]
    },
    {
      "name": "Jalan Pemuda",
      "type": "primary",
      "width": 18,
      "points": [
        [
          736.1,
          -38.7
        ],
        [
          765.6,
          -34.6
        ],
        [
          862.5,
          -24.8
        ]
      ]
    },
    {
      "name": "Jalan Pemuda",
      "type": "primary",
      "width": 18,
      "points": [
        [
          960,
          -19.6
        ],
        [
          891,
          -20.1
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Baru Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          948.7,
          102.4
        ],
        [
          946.7,
          164.2
        ],
        [
          947.7,
          180.2
        ],
        [
          951.5,
          191.4
        ],
        [
          960,
          210.6
        ]
      ]
    },
    {
      "name": "Jalan Haji Darip",
      "type": "primary",
      "width": 18,
      "points": [
        [
          847.7,
          279.5
        ],
        [
          741.7,
          286.2
        ]
      ]
    },
    {
      "name": "Jalan Haji Darip",
      "type": "primary",
      "width": 18,
      "points": [
        [
          742.6,
          283.7
        ],
        [
          836.5,
          277.7
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Barat V",
      "type": "residential",
      "width": 10,
      "points": [
        [
          827.7,
          -284.7
        ],
        [
          797.3,
          -291.3
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          895.5,
          -261.7
        ],
        [
          881.9,
          -231.9
        ],
        [
          868.2,
          -235.6
        ],
        [
          838.1,
          -246.6
        ],
        [
          817.3,
          -253.1
        ],
        [
          789.6,
          -260
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Utara",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          911.9,
          -288.9
        ],
        [
          855.2,
          -323.5
        ],
        [
          842.9,
          -326.3
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Timur K",
      "type": "residential",
      "width": 10,
      "points": [
        [
          857,
          -280.7
        ],
        [
          896.7,
          -260.9
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Utara III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          887.9,
          -301.2
        ],
        [
          873.4,
          -274.3
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Utara I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          842.6,
          -325
        ],
        [
          835.2,
          -293.6
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Barat I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          840.7,
          -316.3
        ],
        [
          809.8,
          -323.9
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Barat II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          806,
          -316.1
        ],
        [
          838.5,
          -308.2
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Barat III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          802,
          -308.3
        ],
        [
          836.7,
          -300.1
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          818.6,
          -252.7
        ],
        [
          827.7,
          -284.7
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          850.1,
          -278
        ],
        [
          838.1,
          -246.6
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          868.4,
          -275.2
        ],
        [
          853.6,
          -241
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          882.8,
          -229.4
        ],
        [
          891.9,
          -251.6
        ],
        [
          912.6,
          -290
        ]
      ]
    },
    {
      "name": "Jalan Rawamangun Muka Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          840.4,
          24.9
        ],
        [
          787.3,
          27.4
        ],
        [
          755.7,
          27.4
        ],
        [
          730.5,
          29.1
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          576.6,
          -31
        ],
        [
          583.7,
          -33.4
        ],
        [
          598.3,
          -36.2
        ],
        [
          648.4,
          -41.3
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          724.1,
          278.9
        ],
        [
          724.5,
          290.8
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          755.3,
          525.7
        ],
        [
          763.4,
          560
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          718.4,
          290.7
        ],
        [
          717.9,
          278.4
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          712.2,
          141.5
        ],
        [
          706,
          118.2
        ],
        [
          704.2,
          103.8
        ],
        [
          705.4,
          84.2
        ],
        [
          707.3,
          73.3
        ],
        [
          709.3,
          69.6
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          823,
          455.7
        ],
        [
          793.6,
          439.2
        ]
      ]
    },
    {
      "name": "Jalan Profesor Doktor Satrio",
      "type": "primary",
      "width": 18,
      "points": [
        [
          327.8,
          406.1
        ],
        [
          334.3,
          405.4
        ],
        [
          355.4,
          405.4
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          392.7,
          409.6
        ],
        [
          395.8,
          410.6
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          612.8,
          420.5
        ],
        [
          624.6,
          420.2
        ],
        [
          655.1,
          421.3
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          569.2,
          428
        ],
        [
          541.3,
          430.2
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          655,
          422.5
        ],
        [
          612.7,
          421.5
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          667.7,
          420.7
        ],
        [
          674.9,
          419.8
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          726,
          422.2
        ],
        [
          735,
          421.8
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          725.9,
          423.9
        ],
        [
          709.1,
          424.4
        ],
        [
          695.5,
          422.1
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          735.3,
          423.4
        ],
        [
          725.9,
          423.9
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          735,
          421.8
        ],
        [
          756.4,
          419.7
        ],
        [
          763.4,
          420.2
        ]
      ]
    },
    {
      "name": "Jalan Profesor Doktor Satrio",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          336.8,
          407.3
        ],
        [
          327.2,
          408
        ],
        [
          317,
          412.5
        ]
      ]
    },
    {
      "name": "Jalan Pal Batu I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          324.6,
          419.9
        ],
        [
          322.7,
          432.3
        ],
        [
          323.7,
          438
        ],
        [
          322.9,
          453
        ],
        [
          323.9,
          468.9
        ],
        [
          318.4,
          469.5
        ],
        [
          317.5,
          473.2
        ]
      ]
    },
    {
      "name": "Jalan Pal Batu Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          341.8,
          415.9
        ],
        [
          324.6,
          419.9
        ],
        [
          317,
          420.1
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          468.8,
          429.8
        ],
        [
          482.7,
          432.3
        ],
        [
          504.6,
          432.5
        ],
        [
          519.7,
          431.8
        ],
        [
          536.7,
          429.3
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          405.4,
          416.9
        ],
        [
          397.5,
          414.5
        ],
        [
          392.2,
          411.8
        ],
        [
          383.1,
          409.6
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          538,
          430.2
        ],
        [
          519.1,
          432.9
        ],
        [
          504.5,
          433.6
        ],
        [
          484.8,
          433.6
        ],
        [
          468.4,
          430.8
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          455.6,
          426.1
        ],
        [
          488.3,
          428.7
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          509.9,
          435.1
        ],
        [
          507.1,
          434.5
        ],
        [
          506.5,
          432.3
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          488.3,
          428.7
        ],
        [
          490.2,
          430
        ],
        [
          490.8,
          432.9
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          586.2,
          346.7
        ],
        [
          581.6,
          334.6
        ],
        [
          578,
          306
        ],
        [
          576.6,
          302.4
        ],
        [
          572.6,
          297.4
        ],
        [
          551.3,
          278.1
        ],
        [
          544,
          266.5
        ],
        [
          542.1,
          264.7
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          612.8,
          425.5
        ],
        [
          610.7,
          423.4
        ],
        [
          606.5,
          423.4
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          629.1,
          413.9
        ],
        [
          630.5,
          417.7
        ],
        [
          635.7,
          419.4
        ],
        [
          648.9,
          420.2
        ],
        [
          663.8,
          419.8
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          653.5,
          424.1
        ],
        [
          626.4,
          425.6
        ],
        [
          622.5,
          426.4
        ],
        [
          620.9,
          428
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          761.5,
          420.9
        ],
        [
          738.8,
          424
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          942.8,
          488.5
        ],
        [
          926.5,
          485
        ],
        [
          894.2,
          480.4
        ],
        [
          852.7,
          467.7
        ]
      ]
    },
    {
      "name": "Landas Pacu Barat",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          317,
          -590.3
        ],
        [
          330.7,
          -592
        ]
      ]
    },
    {
      "name": "Jalan Tebet Timur Dalam V",
      "type": "residential",
      "width": 10,
      "points": [
        [
          462.2,
          530
        ],
        [
          455.7,
          543.3
        ],
        [
          454.4,
          560
        ]
      ]
    },
    {
      "name": "Jalan Tebet Timur I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          455,
          548.6
        ],
        [
          424.7,
          551.7
        ]
      ]
    },
    {
      "name": "Jalan Tebet Timur I H",
      "type": "residential",
      "width": 10,
      "points": [
        [
          428,
          532.2
        ],
        [
          448.9,
          530.2
        ],
        [
          459,
          534.7
        ]
      ]
    },
    {
      "name": "Jalan Tebet Timur Dalam IV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          471.5,
          500.8
        ],
        [
          483.5,
          506.2
        ],
        [
          486.8,
          510.7
        ],
        [
          486.7,
          531
        ],
        [
          484.5,
          534.1
        ],
        [
          475.8,
          538
        ]
      ]
    },
    {
      "name": "Jalan Tebet Timur Dalam IV C",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          473.9,
          507.1
        ],
        [
          482.1,
          511.7
        ],
        [
          482.2,
          528.5
        ],
        [
          479,
          531.3
        ]
      ]
    },
    {
      "name": "Jalan Tebet Timur Dalam I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          428.3,
          490.3
        ],
        [
          439.4,
          508.2
        ],
        [
          441.8,
          522.4
        ]
      ]
    },
    {
      "name": "Jalan Tebet Timur Dalam III M",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          497.8,
          453.5
        ],
        [
          496.3,
          450.6
        ],
        [
          495.1,
          437.8
        ],
        [
          494.5,
          437.2
        ]
      ]
    },
    {
      "name": "Jalan Tebet Utara III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          416.2,
          433.5
        ],
        [
          428.4,
          431.5
        ],
        [
          433.5,
          431.5
        ],
        [
          437.6,
          431.7
        ],
        [
          447.9,
          434.5
        ]
      ]
    },
    {
      "name": "Jalan Tebet Dalam III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          375.4,
          451.2
        ],
        [
          374.8,
          414.5
        ]
      ]
    },
    {
      "name": "Jalan Tebet Dalam II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          345.1,
          450.2
        ],
        [
          375.4,
          451.2
        ]
      ]
    },
    {
      "name": "Jalan Tebet Barat Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          403.3,
          441.4
        ],
        [
          405.3,
          454
        ],
        [
          405.8,
          467.3
        ],
        [
          401.4,
          487.3
        ],
        [
          402.2,
          498.2
        ]
      ]
    },
    {
      "name": "Jalan Tebet Dalam IV",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          385,
          455.6
        ],
        [
          381.8,
          471.5
        ],
        [
          375.9,
          489.7
        ]
      ]
    },
    {
      "name": "Jalan Tebet Dalam IV E",
      "type": "residential",
      "width": 10,
      "points": [
        [
          397.4,
          457.4
        ],
        [
          396.8,
          467.7
        ],
        [
          393.2,
          489.4
        ]
      ]
    },
    {
      "name": "Jalan Tebet Mas Indah IV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          371,
          499.5
        ],
        [
          357.4,
          497.4
        ],
        [
          352.9,
          499.5
        ],
        [
          344,
          511.9
        ],
        [
          333.7,
          529.8
        ]
      ]
    },
    {
      "name": null,
      "type": "primary",
      "width": 18,
      "points": [
        [
          317,
          203.9
        ],
        [
          321.1,
          199.1
        ],
        [
          325.7,
          197.3
        ]
      ]
    },
    {
      "name": "Jalan Bukit Tinggi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          317,
          212.7
        ],
        [
          327.1,
          217.1
        ]
      ]
    },
    {
      "name": "Jalan Padang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          322.7,
          225.2
        ],
        [
          317,
          236.1
        ]
      ]
    },
    {
      "name": "Jalan Padang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          322.7,
          225.2
        ],
        [
          322,
          220.7
        ],
        [
          323.9,
          215.8
        ]
      ]
    },
    {
      "name": "Jalan Padang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          329.2,
          218.6
        ],
        [
          325.3,
          224.1
        ],
        [
          322.7,
          225.2
        ]
      ]
    },
    {
      "name": "Jalan Padang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          334.3,
          198.7
        ],
        [
          327.1,
          217.1
        ]
      ]
    },
    {
      "name": "Jalan Gudang Peluru",
      "type": "residential",
      "width": 10,
      "points": [
        [
          551.5,
          435
        ],
        [
          552.1,
          469.3
        ],
        [
          554.1,
          491.7
        ],
        [
          556.7,
          500
        ],
        [
          568.1,
          522.8
        ]
      ]
    },
    {
      "name": "Jalan Gudang Peluru Utara",
      "type": "residential",
      "width": 10,
      "points": [
        [
          514,
          452.5
        ],
        [
          516.5,
          445.6
        ],
        [
          518.7,
          443.6
        ],
        [
          550.7,
          439
        ]
      ]
    },
    {
      "name": "Jalan Gudang Peluru Timur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          542.9,
          439.7
        ],
        [
          543.9,
          448.8
        ],
        [
          544.8,
          475.7
        ],
        [
          546.5,
          492.6
        ]
      ]
    },
    {
      "name": "Jalan Gudang Peluru Barat",
      "type": "residential",
      "width": 10,
      "points": [
        [
          520,
          451.4
        ],
        [
          525.4,
          489
        ],
        [
          526.5,
          494.9
        ],
        [
          527.7,
          495.5
        ]
      ]
    },
    {
      "name": "Jalan Gudang Peluru Selatan II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          540.6,
          493.8
        ],
        [
          541.6,
          498.3
        ],
        [
          553.5,
          523.4
        ]
      ]
    },
    {
      "name": "Jalan Gudang Peluru Selatan I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          546.5,
          492.6
        ],
        [
          547.7,
          497.5
        ],
        [
          559.8,
          523.8
        ]
      ]
    },
    {
      "name": "Jalan Kebon Baru Utara",
      "type": "residential",
      "width": 10,
      "points": [
        [
          518,
          538.2
        ],
        [
          558.5,
          539.2
        ]
      ]
    },
    {
      "name": "Jalan Asem Baris Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          521,
          560
        ],
        [
          519.5,
          546.1
        ],
        [
          509.6,
          497.4
        ],
        [
          506.3,
          473.4
        ],
        [
          501.3,
          459.2
        ],
        [
          501.2,
          452.3
        ],
        [
          505.8,
          448.8
        ],
        [
          506.8,
          446.9
        ],
        [
          509.9,
          435.1
        ]
      ]
    },
    {
      "name": "Jalan Tanah Mas I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          923.1,
          -141.9
        ],
        [
          923.9,
          -122.4
        ],
        [
          923.7,
          -82.4
        ]
      ]
    },
    {
      "name": "Jalan Angkur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          871,
          -116.7
        ],
        [
          906.8,
          -121.6
        ],
        [
          922.6,
          -122.2
        ]
      ]
    },
    {
      "name": "Jalan Tembok",
      "type": "residential",
      "width": 10,
      "points": [
        [
          914.1,
          -121.2
        ],
        [
          914,
          -89.9
        ],
        [
          874.7,
          -84.4
        ]
      ]
    },
    {
      "name": "Jalan Porselen",
      "type": "residential",
      "width": 10,
      "points": [
        [
          881.5,
          -85.5
        ],
        [
          877.3,
          -116.6
        ]
      ]
    },
    {
      "name": "Jalan Tanah Mas II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          941.8,
          -139.9
        ],
        [
          940.5,
          -87.3
        ]
      ]
    },
    {
      "name": "Jalan Beton",
      "type": "residential",
      "width": 10,
      "points": [
        [
          846.2,
          -151
        ],
        [
          842.1,
          -120.1
        ],
        [
          841.9,
          -112.2
        ],
        [
          845.5,
          -98.9
        ],
        [
          849.7,
          -96.4
        ],
        [
          873.1,
          -98.6
        ]
      ]
    },
    {
      "name": "Jalan Pondasi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          871,
          -116.7
        ],
        [
          867.6,
          -138
        ],
        [
          864.6,
          -142.9
        ],
        [
          856.9,
          -148.7
        ],
        [
          845.3,
          -151.1
        ]
      ]
    },
    {
      "name": "Jalan Bangunan Barat",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          861.3,
          -73.8
        ],
        [
          836,
          -70.6
        ],
        [
          829,
          -70.8
        ],
        [
          825.7,
          -73.5
        ],
        [
          823.6,
          -76.7
        ],
        [
          822.1,
          -80.2
        ],
        [
          820.6,
          -88.2
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          788.7,
          -257.9
        ],
        [
          818.2,
          -250.8
        ],
        [
          845.8,
          -241.8
        ]
      ]
    },
    {
      "name": "Jalan Tener I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          873.3,
          -140.2
        ],
        [
          869.3,
          -147.2
        ],
        [
          864.8,
          -151.2
        ],
        [
          870.9,
          -171.2
        ]
      ]
    },
    {
      "name": "Jalan Tener",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          898,
          -152.6
        ],
        [
          888.5,
          -162.2
        ],
        [
          871.5,
          -171.9
        ]
      ]
    },
    {
      "name": "Jalan Tanah Mas Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          960,
          -140.6
        ],
        [
          923.1,
          -141.9
        ]
      ]
    },
    {
      "name": "Jalan Haji Ten",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          743.9,
          -93.2
        ],
        [
          754,
          -87.8
        ],
        [
          774.3,
          -79.6
        ],
        [
          777.8,
          -79.4
        ],
        [
          793.7,
          -81.5
        ],
        [
          804.6,
          -87.5
        ],
        [
          818.9,
          -88.2
        ]
      ]
    },
    {
      "name": "Jalan Kayu Barat",
      "type": "residential",
      "width": 10,
      "points": [
        [
          825.3,
          -142
        ],
        [
          822.6,
          -120.2
        ],
        [
          822.8,
          -109.2
        ]
      ]
    },
    {
      "name": "Jalan Kikir",
      "type": "residential",
      "width": 10,
      "points": [
        [
          866.2,
          -97
        ],
        [
          867.7,
          -83
        ],
        [
          833.2,
          -79
        ],
        [
          832,
          -79.3
        ],
        [
          830,
          -82.1
        ],
        [
          825.2,
          -103.4
        ]
      ]
    },
    {
      "name": "Jalan Locis",
      "type": "residential",
      "width": 10,
      "points": [
        [
          872,
          -104.1
        ],
        [
          850.6,
          -101.5
        ],
        [
          846.7,
          -114
        ],
        [
          847,
          -118.4
        ]
      ]
    },
    {
      "name": "Jalan Kayu Jati Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          861.9,
          -70.5
        ],
        [
          862.9,
          -60.9
        ],
        [
          862.2,
          -34.9
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Selatan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          753.1,
          -266.3
        ],
        [
          758.4,
          -290.8
        ],
        [
          772.2,
          -341.6
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Selatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          747.9,
          -184.8
        ],
        [
          748.3,
          -204.7
        ],
        [
          751,
          -217.8
        ],
        [
          750.2,
          -227.6
        ],
        [
          751.6,
          -246.4
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          788.9,
          -253.7
        ],
        [
          835.8,
          -241
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Barat VI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          845.4,
          -217.9
        ],
        [
          866.7,
          -208.8
        ],
        [
          875.5,
          -206
        ]
      ]
    },
    {
      "name": "Jalan Batu Topas",
      "type": "residential",
      "width": 10,
      "points": [
        [
          812.1,
          -176.2
        ],
        [
          828.3,
          -183.5
        ],
        [
          845.6,
          -189.7
        ]
      ]
    },
    {
      "name": "Jalan Batu Sulaiman",
      "type": "residential",
      "width": 10,
      "points": [
        [
          842.1,
          -199.5
        ],
        [
          851.4,
          -172.4
        ],
        [
          854,
          -167.4
        ],
        [
          852.5,
          -156.3
        ],
        [
          858.8,
          -153.9
        ]
      ]
    },
    {
      "name": "Jalan Metro Jaya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          751.5,
          -184.3
        ],
        [
          753.5,
          -180.7
        ],
        [
          759.5,
          -175.4
        ],
        [
          761.2,
          -172.8
        ],
        [
          762.7,
          -168
        ],
        [
          765.4,
          -165.2
        ],
        [
          771.6,
          -162.6
        ],
        [
          777.4,
          -162.2
        ]
      ]
    },
    {
      "name": "Jalan Rawamangun Muka Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          801.3,
          78.1
        ],
        [
          799.1,
          74.7
        ],
        [
          798.6,
          71.8
        ],
        [
          815.4,
          58.8
        ],
        [
          818.8,
          53.7
        ],
        [
          819.2,
          49.8
        ],
        [
          818.2,
          44.8
        ],
        [
          809,
          30.6
        ]
      ]
    },
    {
      "name": "Jalan Rawamangun Muka Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          834,
          100.9
        ],
        [
          836.1,
          77.1
        ],
        [
          835.2,
          53.4
        ]
      ]
    },
    {
      "name": "Jalan Balai Pustaka",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          842.8,
          24.8
        ],
        [
          888.2,
          23.5
        ]
      ]
    },
    {
      "name": "Jalan Wisma Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          841.4,
          101.2
        ],
        [
          859,
          101.8
        ],
        [
          886.3,
          98.1
        ]
      ]
    },
    {
      "name": "Jalan Kedondong Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          888.1,
          98
        ],
        [
          911.2,
          97.2
        ],
        [
          947.3,
          99.6
        ]
      ]
    },
    {
      "name": "Jalan Wisma Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          886.3,
          101.3
        ],
        [
          873.7,
          102.2
        ],
        [
          856.8,
          104.6
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Baru Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          946.8,
          102.2
        ],
        [
          908.6,
          99.8
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Bunder",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          886.4,
          166.5
        ],
        [
          900.4,
          166.7
        ],
        [
          946.7,
          164.2
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Bunder",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          946.8,
          165.8
        ],
        [
          901.1,
          168.5
        ],
        [
          885.1,
          172.8
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Kebembem",
      "type": "residential",
      "width": 10,
      "points": [
        [
          919.7,
          239.7
        ],
        [
          838.5,
          238.1
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Kebembem II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          860.5,
          238.6
        ],
        [
          860.2,
          205.6
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Kebembem I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          869.6,
          238.7
        ],
        [
          869.7,
          205.7
        ]
      ]
    },
    {
      "name": "Jalan I Gusti Ngurah Rai",
      "type": "primary",
      "width": 18,
      "points": [
        [
          910.2,
          272.9
        ],
        [
          916.6,
          271.9
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          614.1,
          -345.5
        ],
        [
          628.7,
          -313.2
        ],
        [
          633.2,
          -300.3
        ],
        [
          633.9,
          -296.2
        ],
        [
          633.6,
          -266
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Barat II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          579.4,
          -285.5
        ],
        [
          552.1,
          -291.7
        ],
        [
          531.4,
          -291.9
        ],
        [
          525.1,
          -294.5
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Barat 26",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          661.1,
          -123.3
        ],
        [
          659,
          -130.3
        ],
        [
          656.1,
          -149.6
        ],
        [
          651.6,
          -162.3
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          532,
          -267
        ],
        [
          574.9,
          -266
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Barat III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          577.2,
          -312.5
        ],
        [
          551.6,
          -300.2
        ],
        [
          550.4,
          -298.4
        ],
        [
          548.7,
          -291.6
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          673.9,
          -333.6
        ],
        [
          628.7,
          -313.2
        ],
        [
          589.9,
          -294.4
        ],
        [
          584.8,
          -289.5
        ],
        [
          583.4,
          -284.7
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XXVII B",
      "type": "residential",
      "width": 10,
      "points": [
        [
          635.2,
          -284.4
        ],
        [
          691.5,
          -283.5
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XXVII",
      "type": "residential",
      "width": 10,
      "points": [
        [
          693.4,
          -296.6
        ],
        [
          692.8,
          -264.8
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XVII",
      "type": "residential",
      "width": 10,
      "points": [
        [
          710.2,
          -291.9
        ],
        [
          693.4,
          -296.6
        ],
        [
          633.7,
          -298
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XXVII A",
      "type": "residential",
      "width": 10,
      "points": [
        [
          692.5,
          -289.2
        ],
        [
          634.9,
          -290.1
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XXVII C",
      "type": "residential",
      "width": 10,
      "points": [
        [
          692.1,
          -277.9
        ],
        [
          635.3,
          -278.8
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XXVII D",
      "type": "residential",
      "width": 10,
      "points": [
        [
          691.8,
          -272.4
        ],
        [
          635.1,
          -272.8
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          621,
          -330.4
        ],
        [
          646.8,
          -343.1
        ],
        [
          676.2,
          -356.2
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah VI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          673.9,
          -333.6
        ],
        [
          680.7,
          -318.4
        ],
        [
          678.6,
          -297
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XXVII",
      "type": "residential",
      "width": 10,
      "points": [
        [
          701.3,
          -358.2
        ],
        [
          707,
          -344.8
        ],
        [
          702.5,
          -325.2
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          630.6,
          -304.4
        ],
        [
          594.4,
          -287.8
        ],
        [
          592.7,
          -285.9
        ],
        [
          591.4,
          -281.9
        ],
        [
          590.7,
          -266.4
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XVII",
      "type": "residential",
      "width": 10,
      "points": [
        [
          633,
          -295.9
        ],
        [
          621.2,
          -292.1
        ],
        [
          615.3,
          -289.4
        ],
        [
          611.7,
          -285.9
        ],
        [
          609.8,
          -281.8
        ],
        [
          609.1,
          -266.7
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XVIII",
      "type": "residential",
      "width": 10,
      "points": [
        [
          614.5,
          -305.2
        ],
        [
          622.8,
          -288.3
        ],
        [
          623.2,
          -267
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XXXIII",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          715.7,
          -324.3
        ],
        [
          720.7,
          -350.4
        ],
        [
          720.2,
          -353.5
        ],
        [
          718.1,
          -358.1
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XXXI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          704.9,
          -334.8
        ],
        [
          698.6,
          -340.5
        ],
        [
          687.4,
          -361.3
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          769.7,
          -403.6
        ],
        [
          765.3,
          -403.5
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          590.7,
          -265.7
        ],
        [
          639.3,
          -266.1
        ],
        [
          692.8,
          -264.8
        ],
        [
          704.8,
          -263.2
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Timur V A",
      "type": "residential",
      "width": 10,
      "points": [
        [
          728,
          -361
        ],
        [
          729.1,
          -356.7
        ],
        [
          729,
          -351.5
        ],
        [
          725.3,
          -330.9
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Timur IV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          734,
          -321
        ],
        [
          739.3,
          -345.7
        ],
        [
          743.2,
          -355
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Timur VII",
      "type": "residential",
      "width": 10,
      "points": [
        [
          725.3,
          -322
        ],
        [
          719.2,
          -290.5
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Timur XXIV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          722.6,
          -186.2
        ],
        [
          724.3,
          -219.3
        ],
        [
          729.9,
          -258.4
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XXI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          638.3,
          -266.1
        ],
        [
          638.6,
          -232.1
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XXXIII",
      "type": "residential",
      "width": 10,
      "points": [
        [
          681.7,
          -218
        ],
        [
          699.5,
          -244.8
        ],
        [
          700.9,
          -248.5
        ],
        [
          703.6,
          -263.3
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XX",
      "type": "residential",
      "width": 10,
      "points": [
        [
          606.8,
          -265.1
        ],
        [
          607,
          -257.2
        ],
        [
          607.9,
          -253.2
        ],
        [
          615,
          -243.5
        ],
        [
          626.3,
          -231.1
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XXVI A",
      "type": "residential",
      "width": 10,
      "points": [
        [
          639.2,
          -258.1
        ],
        [
          669.6,
          -257.6
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XXIII",
      "type": "residential",
      "width": 10,
      "points": [
        [
          682.1,
          -217.9
        ],
        [
          647.4,
          -218.3
        ],
        [
          646.3,
          -219
        ]
      ]
    },
    {
      "name": "Jalan Rawasari Timur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          686.5,
          -141.7
        ],
        [
          687,
          -156.7
        ],
        [
          688.1,
          -165.4
        ],
        [
          693.5,
          -182.6
        ],
        [
          695.9,
          -187
        ]
      ]
    },
    {
      "name": "Jalan Rawasari Timur V",
      "type": "residential",
      "width": 10,
      "points": [
        [
          694.2,
          -182.4
        ],
        [
          711,
          -178.3
        ],
        [
          724.4,
          -177.4
        ]
      ]
    },
    {
      "name": "Jalan Rawasari Timur I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          731.3,
          -160.4
        ],
        [
          727,
          -160.7
        ],
        [
          726.6,
          -158.9
        ],
        [
          725.6,
          -158.8
        ],
        [
          688,
          -161.3
        ]
      ]
    },
    {
      "name": "Jalan Rawasari Timur I Dalam",
      "type": "residential",
      "width": 10,
      "points": [
        [
          699,
          -175.2
        ],
        [
          697.1,
          -164.9
        ],
        [
          697.2,
          -157.6
        ],
        [
          715.2,
          -153.1
        ],
        [
          716.3,
          -153.6
        ],
        [
          718,
          -159.2
        ]
      ]
    },
    {
      "name": "Jalan Rawasari Timur IV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          692.4,
          -176.7
        ],
        [
          710.8,
          -173.1
        ],
        [
          724.1,
          -172
        ]
      ]
    },
    {
      "name": "Jalan Rawasari Selatan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          686,
          -140.8
        ],
        [
          717.8,
          -137.3
        ]
      ]
    },
    {
      "name": "Jalan Rawasari Barat",
      "type": "residential",
      "width": 10,
      "points": [
        [
          671.2,
          -133.3
        ],
        [
          670.9,
          -142.9
        ],
        [
          669.7,
          -147.3
        ],
        [
          660.3,
          -172
        ]
      ]
    },
    {
      "name": "Jalan Rawasari Selatan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          728.8,
          -101.8
        ],
        [
          720.5,
          -111.9
        ],
        [
          714,
          -117.5
        ],
        [
          699.4,
          -124.1
        ],
        [
          687.7,
          -132.1
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih",
      "type": "residential",
      "width": 10,
      "points": [
        [
          707,
          -262.9
        ],
        [
          703.5,
          -248.5
        ],
        [
          700.7,
          -241.5
        ],
        [
          684.1,
          -217.5
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Timur XVII",
      "type": "residential",
      "width": 10,
      "points": [
        [
          715.3,
          -240.1
        ],
        [
          705.8,
          -212.2
        ],
        [
          703.7,
          -196
        ],
        [
          701.6,
          -189.2
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XXVI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          655.4,
          -232.2
        ],
        [
          630.1,
          -232.1
        ],
        [
          626.7,
          -230.5
        ],
        [
          614.5,
          -219.1
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Barat XIV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          612.3,
          -215.2
        ],
        [
          588.2,
          -194.7
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Barat XXI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          568.9,
          -266.3
        ],
        [
          569.1,
          -260.2
        ],
        [
          572.3,
          -252.8
        ],
        [
          582.5,
          -239.1
        ],
        [
          606.3,
          -210.1
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Barat 12F",
      "type": "residential",
      "width": 10,
      "points": [
        [
          532.4,
          -243
        ],
        [
          556.1,
          -243.4
        ],
        [
          587.4,
          -205.5
        ]
      ]
    },
    {
      "name": "Jalan SAL. PHB Cempaka",
      "type": "residential",
      "width": 10,
      "points": [
        [
          532,
          -267
        ],
        [
          531.9,
          -263.7
        ],
        [
          529,
          -255.9
        ],
        [
          528.4,
          -251.3
        ],
        [
          530,
          -228.3
        ],
        [
          532.9,
          -212.5
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Barat",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          556.9,
          -212.8
        ],
        [
          571.7,
          -196.2
        ],
        [
          643,
          -110.5
        ]
      ]
    },
    {
      "name": "Jalan Percetakan Negara",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          658.7,
          -113.6
        ],
        [
          656.8,
          -108.1
        ],
        [
          653.7,
          -106.7
        ],
        [
          619.9,
          -115.3
        ],
        [
          612,
          -114.7
        ],
        [
          587.1,
          -104.3
        ],
        [
          559.9,
          -90.4
        ],
        [
          535.3,
          -85.2
        ]
      ]
    },
    {
      "name": "Jalan Salemba Tengah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          398,
          -20.7
        ],
        [
          409.4,
          -24
        ],
        [
          434.8,
          -29.1
        ]
      ]
    },
    {
      "name": "Jalan Pangkalan Asem",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          489.1,
          -295.5
        ],
        [
          493.8,
          -275
        ],
        [
          510.9,
          -223.5
        ]
      ]
    },
    {
      "name": "Jalan Galur Jaya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          444.6,
          -243.4
        ],
        [
          443.1,
          -224.6
        ],
        [
          443.4,
          -210.9
        ]
      ]
    },
    {
      "name": "Jalan Rawa Selatan IV",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          467.4,
          -194
        ],
        [
          484.3,
          -195.3
        ],
        [
          520.2,
          -194.5
        ]
      ]
    },
    {
      "name": "Jalan Kramat Jaya Baru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          433.8,
          -208
        ],
        [
          437.8,
          -202.5
        ],
        [
          442.2,
          -198.6
        ],
        [
          441.3,
          -191.2
        ]
      ]
    },
    {
      "name": "Jalan Percetakan Negara 2",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          465.3,
          -151.5
        ],
        [
          464.2,
          -127.7
        ],
        [
          473.7,
          -107.9
        ],
        [
          473.9,
          -90.6
        ],
        [
          474.8,
          -87.6
        ],
        [
          491,
          -62.8
        ]
      ]
    },
    {
      "name": "Jalan Johar Baru Utara I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          466,
          -173
        ],
        [
          482,
          -179.1
        ],
        [
          508.1,
          -187.2
        ]
      ]
    },
    {
      "name": "Jalan Rawa Sawah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          405.2,
          -194.8
        ],
        [
          410.1,
          -195.2
        ],
        [
          418.1,
          -200.5
        ],
        [
          433.8,
          -208
        ]
      ]
    },
    {
      "name": "Jalan Kramat Jaya Baru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          439.4,
          -152.5
        ],
        [
          465.3,
          -151.5
        ]
      ]
    },
    {
      "name": "Jalan Mardani",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          534.9,
          -195.9
        ],
        [
          541.2,
          -195.2
        ],
        [
          545.1,
          -190.6
        ],
        [
          553.1,
          -153
        ],
        [
          554.6,
          -140.6
        ]
      ]
    },
    {
      "name": "Jalan Narada",
      "type": "residential",
      "width": 10,
      "points": [
        [
          403.7,
          -226.7
        ],
        [
          357.5,
          -228.6
        ]
      ]
    },
    {
      "name": "Jalan Sumbadra",
      "type": "residential",
      "width": 10,
      "points": [
        [
          350.3,
          -217.7
        ],
        [
          393.8,
          -215.8
        ]
      ]
    },
    {
      "name": "Jalan Pulo Gundul",
      "type": "residential",
      "width": 10,
      "points": [
        [
          400.3,
          -122.6
        ],
        [
          398.7,
          -126.7
        ],
        [
          398.4,
          -134.2
        ],
        [
          400.7,
          -149.2
        ],
        [
          401.9,
          -170.4
        ]
      ]
    },
    {
      "name": "Jalan Rawa Selatan I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          463.1,
          -237.3
        ],
        [
          492.4,
          -238.5
        ],
        [
          495.6,
          -239.8
        ],
        [
          504.9,
          -241.5
        ]
      ]
    },
    {
      "name": "Jalan Johar Baru V",
      "type": "residential",
      "width": 10,
      "points": [
        [
          507.8,
          -165.1
        ],
        [
          511.6,
          -121.1
        ],
        [
          514.8,
          -107.8
        ]
      ]
    },
    {
      "name": "Jalan Percetakan Negara IX",
      "type": "residential",
      "width": 10,
      "points": [
        [
          545.3,
          -87.3
        ],
        [
          549.1,
          -66.5
        ],
        [
          554.8,
          -46.3
        ]
      ]
    },
    {
      "name": "Jalanl Percetakan Negara V",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          494.5,
          -64.7
        ],
        [
          499.9,
          -52.2
        ],
        [
          504.4,
          -27.4
        ],
        [
          503.6,
          -18.1
        ]
      ]
    },
    {
      "name": "Jalan Percetakan Negara VIII",
      "type": "residential",
      "width": 10,
      "points": [
        [
          503.8,
          -33.5
        ],
        [
          510.9,
          -35.4
        ],
        [
          527,
          -37.2
        ],
        [
          534.4,
          -39.9
        ],
        [
          538.2,
          -40.1
        ]
      ]
    },
    {
      "name": "Jalan Pramuka Jati",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          443.2,
          -28.2
        ],
        [
          447.3,
          -27.8
        ],
        [
          466.1,
          -21.4
        ],
        [
          468.9,
          -17.8
        ],
        [
          472.4,
          -15.1
        ],
        [
          482.6,
          -1.8
        ],
        [
          490.9,
          9.5
        ],
        [
          495.2,
          16.8
        ]
      ]
    },
    {
      "name": "Jalan Percetakan Negara XI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          563.4,
          -92.1
        ],
        [
          575.7,
          -68.3
        ],
        [
          577.1,
          -63.3
        ],
        [
          577.8,
          -56.1
        ]
      ]
    },
    {
      "name": "Jalan Sayuti",
      "type": "residential",
      "width": 10,
      "points": [
        [
          592.4,
          -106.4
        ],
        [
          595.8,
          -68.5
        ]
      ]
    },
    {
      "name": "Jalan Percetakan Negara XI A",
      "type": "residential",
      "width": 10,
      "points": [
        [
          574.4,
          -96.5
        ],
        [
          580.2,
          -84.1
        ],
        [
          584.8,
          -68
        ],
        [
          587.7,
          -66.8
        ]
      ]
    },
    {
      "name": "Jalan Paseban Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          431.4,
          -55
        ],
        [
          430.1,
          -56
        ],
        [
          419.4,
          -58.6
        ],
        [
          406.2,
          -57.9
        ],
        [
          399.4,
          -55.2
        ],
        [
          387.3,
          -52.5
        ],
        [
          377,
          -47.6
        ]
      ]
    },
    {
      "name": "Jalan Kramat Lontar",
      "type": "residential",
      "width": 10,
      "points": [
        [
          340,
          -72.8
        ],
        [
          365,
          -87.5
        ],
        [
          374.2,
          -91.9
        ],
        [
          387.9,
          -97.3
        ],
        [
          394.2,
          -98.2
        ]
      ]
    },
    {
      "name": "Jalan Kramat Lontar Buntu",
      "type": "residential",
      "width": 10,
      "points": [
        [
          394.2,
          -98.2
        ],
        [
          393.3,
          -87.1
        ],
        [
          390.9,
          -78.2
        ],
        [
          386.9,
          -69.8
        ],
        [
          376,
          -56.7
        ]
      ]
    },
    {
      "name": "Jalan Angkasa",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          343.2,
          -541.3
        ],
        [
          348.5,
          -535.9
        ],
        [
          363.6,
          -492.1
        ]
      ]
    },
    {
      "name": "Jalan Utan Kayu",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          554.1,
          -17.3
        ],
        [
          564.2,
          -15.6
        ],
        [
          595,
          -19.2
        ],
        [
          612.1,
          -19.1
        ]
      ]
    },
    {
      "name": "Jalan Pengayoman",
      "type": "residential",
      "width": 10,
      "points": [
        [
          664.3,
          -38.9
        ],
        [
          662.7,
          -29
        ],
        [
          644,
          -5.4
        ]
      ]
    },
    {
      "name": "Jalan Mede",
      "type": "residential",
      "width": 10,
      "points": [
        [
          644.6,
          -5.8
        ],
        [
          654.1,
          -3.4
        ],
        [
          678.8,
          0.4
        ],
        [
          690.6,
          3.5
        ]
      ]
    },
    {
      "name": "Jalan Pengayoman I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          661.8,
          -26.4
        ],
        [
          666.8,
          -22.6
        ],
        [
          679,
          -20.9
        ],
        [
          687.4,
          -16.9
        ],
        [
          692.4,
          -23.2
        ],
        [
          694.4,
          -23.6
        ]
      ]
    },
    {
      "name": "Jalan Balai Rakyat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          644,
          -5.4
        ],
        [
          639.9,
          1.8
        ],
        [
          638.6,
          7.7
        ],
        [
          638.7,
          12.2
        ],
        [
          640.6,
          21.1
        ],
        [
          646.6,
          40.6
        ]
      ]
    },
    {
      "name": "Jalan Balai Rakyat",
      "type": "residential",
      "width": 10,
      "points": [
        [
          643.3,
          21.9
        ],
        [
          657.1,
          30.5
        ],
        [
          675.7,
          40.5
        ]
      ]
    },
    {
      "name": "Jalan Kramat Asem",
      "type": "residential",
      "width": 10,
      "points": [
        [
          708.4,
          26.3
        ],
        [
          707.7,
          33.7
        ],
        [
          709.1,
          55.6
        ],
        [
          708.9,
          65.3
        ]
      ]
    },
    {
      "name": "Jalan Kramat Asem Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          650.5,
          119.9
        ],
        [
          679.4,
          128.5
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Baru Tengah Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          618.5,
          229.5
        ],
        [
          622.5,
          232.6
        ],
        [
          627.4,
          233.6
        ],
        [
          633.9,
          234.3
        ],
        [
          651.7,
          233.4
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Tinggi",
      "type": "residential",
      "width": 10,
      "points": [
        [
          659.5,
          193.7
        ],
        [
          669.7,
          176.7
        ],
        [
          678.7,
          165.7
        ]
      ]
    },
    {
      "name": "Jalan Rasamala",
      "type": "residential",
      "width": 10,
      "points": [
        [
          682.1,
          162.7
        ],
        [
          682.1,
          155
        ],
        [
          685.2,
          141.5
        ],
        [
          684.5,
          137.5
        ],
        [
          685.1,
          133.9
        ],
        [
          686.9,
          130.1
        ]
      ]
    },
    {
      "name": "Jalan Kayu Manis VII",
      "type": "residential",
      "width": 10,
      "points": [
        [
          586.3,
          137.4
        ],
        [
          539.6,
          142.5
        ]
      ]
    },
    {
      "name": "Jalan Kebon Kelapa Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          595.7,
          159.2
        ],
        [
          624.4,
          150.4
        ]
      ]
    },
    {
      "name": "Jalan Pandan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          622.1,
          135.2
        ],
        [
          624.4,
          150.4
        ]
      ]
    },
    {
      "name": "Jalan Kayu Manis VIII",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          545.6,
          165.5
        ],
        [
          551.5,
          164.2
        ],
        [
          572.2,
          162.5
        ],
        [
          595.7,
          159.2
        ]
      ]
    },
    {
      "name": "Jalan Kayu Manis Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          586.3,
          137.4
        ],
        [
          581,
          126.4
        ],
        [
          569.4,
          91.6
        ],
        [
          557.4,
          65.7
        ],
        [
          544.2,
          31
        ]
      ]
    },
    {
      "name": "Jalan Kemuning",
      "type": "residential",
      "width": 10,
      "points": [
        [
          590.2,
          7.6
        ],
        [
          589.7,
          19.8
        ],
        [
          579.6,
          56.4
        ],
        [
          577.9,
          65.3
        ],
        [
          579.2,
          76.1
        ]
      ]
    },
    {
      "name": "Jalan Galur Sari Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          581,
          51.7
        ],
        [
          593.3,
          51.5
        ],
        [
          616.5,
          47.8
        ],
        [
          620.3,
          48.4
        ],
        [
          623.4,
          47.9
        ],
        [
          624.7,
          48.7
        ]
      ]
    },
    {
      "name": "Jalan Galur Sari III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          617.8,
          48
        ],
        [
          618.3,
          54.9
        ],
        [
          620.8,
          62.6
        ],
        [
          622,
          82.6
        ],
        [
          623.6,
          90.2
        ]
      ]
    },
    {
      "name": "Jalan Mangga Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          600.1,
          26.9
        ],
        [
          599.6,
          22.2
        ],
        [
          603,
          -2.9
        ],
        [
          603.5,
          -19.4
        ]
      ]
    },
    {
      "name": "Jalan Rambutan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          540.5,
          22.2
        ],
        [
          552.1,
          23.1
        ],
        [
          571.4,
          28.2
        ]
      ]
    },
    {
      "name": "Jalan Galur Sari I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          593.3,
          51.5
        ],
        [
          596.4,
          83.7
        ]
      ]
    },
    {
      "name": "Jalan Galur Sari VIII",
      "type": "residential",
      "width": 10,
      "points": [
        [
          595.8,
          77.7
        ],
        [
          629.7,
          76.2
        ]
      ]
    },
    {
      "name": "Jalan Galur Sari Barat",
      "type": "residential",
      "width": 10,
      "points": [
        [
          588.6,
          83.5
        ],
        [
          585.5,
          51.7
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Baru Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          698.1,
          265.9
        ],
        [
          697.2,
          236.5
        ]
      ]
    },
    {
      "name": "Jalan Kebon Sereh Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          714.2,
          240.1
        ],
        [
          715.6,
          277.5
        ],
        [
          715,
          279.5
        ],
        [
          713.1,
          280.3
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Baru III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          630.3,
          240.3
        ],
        [
          632.4,
          258.5
        ],
        [
          634.1,
          263.2
        ],
        [
          640.2,
          273.1
        ],
        [
          642.1,
          278.7
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Baru II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          658.8,
          233.3
        ],
        [
          659.6,
          248.1
        ],
        [
          658.7,
          252
        ],
        [
          653.6,
          263.3
        ],
        [
          652.5,
          278.5
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Baru I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          673.9,
          231.8
        ],
        [
          675.3,
          251.9
        ],
        [
          676.3,
          253.8
        ],
        [
          676.5,
          267.7
        ],
        [
          678,
          270.8
        ],
        [
          678.1,
          277.9
        ]
      ]
    },
    {
      "name": "Jalan Tegalan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          505.8,
          96.8
        ],
        [
          491,
          102.5
        ],
        [
          481.8,
          107.4
        ]
      ]
    },
    {
      "name": "Jalan Penggalang",
      "type": "residential",
      "width": 10,
      "points": [
        [
          479.6,
          53.2
        ],
        [
          491.4,
          76.2
        ],
        [
          495.7,
          88.8
        ]
      ]
    },
    {
      "name": "Jalan Penegak",
      "type": "residential",
      "width": 10,
      "points": [
        [
          483.6,
          94.3
        ],
        [
          480.6,
          88.5
        ],
        [
          474.1,
          79.8
        ],
        [
          460.8,
          65.7
        ]
      ]
    },
    {
      "name": "Jalan Tegalan I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          492.6,
          111.3
        ],
        [
          497.6,
          124.3
        ],
        [
          505.6,
          149.4
        ]
      ]
    },
    {
      "name": "Jalan Kesatrian",
      "type": "residential",
      "width": 10,
      "points": [
        [
          451.2,
          168.2
        ],
        [
          492.3,
          152.5
        ]
      ]
    },
    {
      "name": "Jalan KH. Ahmad Dahlan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          550.5,
          192.8
        ],
        [
          553.2,
          192.2
        ]
      ]
    },
    {
      "name": "Jalan Kayu Manis IX",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          552.2,
          186.1
        ],
        [
          561.1,
          184.1
        ],
        [
          567.9,
          184.3
        ],
        [
          584.6,
          181.2
        ],
        [
          603.3,
          180.8
        ]
      ]
    },
    {
      "name": "Jalan Kayu Manis X",
      "type": "residential",
      "width": 10,
      "points": [
        [
          609.9,
          196.3
        ],
        [
          556.1,
          202.6
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Baru Utara",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          626.2,
          193.2
        ],
        [
          630.8,
          189.8
        ],
        [
          665,
          194.3
        ],
        [
          670,
          197.6
        ],
        [
          673.9,
          199
        ]
      ]
    },
    {
      "name": "Jalan Palmeriam 2",
      "type": "residential",
      "width": 10,
      "points": [
        [
          525.3,
          144.5
        ],
        [
          525.9,
          146.5
        ],
        [
          524.2,
          155.4
        ],
        [
          525.3,
          164.3
        ],
        [
          535,
          194.9
        ]
      ]
    },
    {
      "name": "Jalan Alu-Alu",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          949.1,
          99.7
        ],
        [
          960,
          100.5
        ]
      ]
    },
    {
      "name": "Jalan Anggrek",
      "type": "residential",
      "width": 10,
      "points": [
        [
          921.5,
          97.7
        ],
        [
          922,
          80.3
        ],
        [
          913.3,
          51.3
        ],
        [
          913.3,
          43.8
        ]
      ]
    },
    {
      "name": "Jalan Taman Jelita Utara",
      "type": "residential",
      "width": 10,
      "points": [
        [
          851.6,
          48.4
        ],
        [
          860.2,
          47.7
        ],
        [
          865.4,
          48.7
        ],
        [
          885.3,
          49.3
        ]
      ]
    },
    {
      "name": "Jalan Mustika Jaya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          881.2,
          66.3
        ],
        [
          850,
          68.8
        ]
      ]
    },
    {
      "name": "Jalan Balai Pustaka Baru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          890.4,
          -9.7
        ],
        [
          889.7,
          23.5
        ]
      ]
    },
    {
      "name": "Jalan Sunan Giri",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          862.1,
          -12.4
        ],
        [
          859,
          -3.4
        ]
      ]
    },
    {
      "name": "Jalan Rawamangun Muka III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          828.2,
          94
        ],
        [
          822.4,
          93.7
        ],
        [
          806.6,
          74.3
        ]
      ]
    },
    {
      "name": "Jalan Rawamangun Muka II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          828.2,
          94
        ],
        [
          829.9,
          72
        ],
        [
          828.8,
          59.5
        ]
      ]
    },
    {
      "name": "Jalan Gading Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          824.1,
          203.6
        ],
        [
          824.7,
          195.2
        ],
        [
          828.8,
          171
        ],
        [
          828.4,
          154.9
        ],
        [
          826.6,
          137.9
        ],
        [
          827,
          137.2
        ],
        [
          835.7,
          134.4
        ],
        [
          842.7,
          128.4
        ],
        [
          844.1,
          118.3
        ],
        [
          841.4,
          110.6
        ],
        [
          841.3,
          104.5
        ]
      ]
    },
    {
      "name": "Jalan Bujana Tirta 4",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          783,
          102.3
        ],
        [
          783.9,
          150.2
        ]
      ]
    },
    {
      "name": "Jalan Rawamangun Selatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          834,
          100.9
        ],
        [
          817.4,
          98.7
        ]
      ]
    },
    {
      "name": "Jalan Pori Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          824.1,
          203.6
        ],
        [
          813.5,
          203.2
        ],
        [
          811.8,
          206.3
        ],
        [
          790.8,
          203.7
        ],
        [
          784.6,
          204.3
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Kebembem Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          885.1,
          172.8
        ],
        [
          879.7,
          177.3
        ],
        [
          873,
          185.5
        ],
        [
          871.5,
          195.4
        ],
        [
          871.9,
          205.2
        ],
        [
          869.7,
          205.7
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Lama III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          839.1,
          230.2
        ],
        [
          825,
          227.4
        ],
        [
          813.3,
          227.1
        ],
        [
          785.1,
          229.1
        ]
      ]
    },
    {
      "name": "Jalan Bujana Tirta",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          717.3,
          147.2
        ],
        [
          763.8,
          150
        ],
        [
          783.9,
          150.2
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Lama III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          786.9,
          271.5
        ],
        [
          785.1,
          229.1
        ],
        [
          783.9,
          153.1
        ]
      ]
    },
    {
      "name": "Jalan Persahabatan Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          960,
          103.2
        ],
        [
          953.5,
          102.8
        ]
      ]
    },
    {
      "name": "Jalan Bumiputera Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          936,
          131.6
        ],
        [
          937.1,
          101.6
        ]
      ]
    },
    {
      "name": "Jalan Bukit Gading Raya Boulevard",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          912.4,
          -348.9
        ],
        [
          925.6,
          -372
        ]
      ]
    },
    {
      "name": "Jalan Al Barkah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          322.7,
          360.8
        ],
        [
          344.7,
          360.1
        ],
        [
          356.1,
          361.8
        ],
        [
          375.1,
          367.5
        ],
        [
          378.6,
          366.3
        ],
        [
          387.1,
          369.4
        ]
      ]
    },
    {
      "name": "Jalan Manggis I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          332.2,
          336.8
        ],
        [
          335.1,
          339.4
        ],
        [
          344.6,
          344.2
        ],
        [
          359.2,
          349.2
        ],
        [
          371.4,
          354.6
        ],
        [
          387.1,
          357.5
        ],
        [
          392,
          361
        ]
      ]
    },
    {
      "name": "Jalan Al Barkah I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          387.1,
          369.4
        ],
        [
          387.9,
          369.1
        ],
        [
          396.7,
          352.7
        ],
        [
          394.7,
          350.8
        ],
        [
          394.8,
          349.9
        ],
        [
          400.3,
          341.5
        ]
      ]
    },
    {
      "name": "Jalan Rambutan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          317,
          323.5
        ],
        [
          330.3,
          323.2
        ],
        [
          341.8,
          326.3
        ],
        [
          342.7,
          324.2
        ],
        [
          342.8,
          319.6
        ],
        [
          343.8,
          318
        ]
      ]
    },
    {
      "name": "Jalan Sawo III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          317,
          306.4
        ],
        [
          322.1,
          305.6
        ],
        [
          339.6,
          308.4
        ],
        [
          346.2,
          310.9
        ],
        [
          349.5,
          313.2
        ]
      ]
    },
    {
      "name": "Jalan Swadaya I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          321.7,
          251.6
        ],
        [
          324.8,
          256.5
        ],
        [
          344.6,
          277.6
        ],
        [
          346.8,
          283
        ],
        [
          347.2,
          287.9
        ],
        [
          350.3,
          294.4
        ]
      ]
    },
    {
      "name": "Jalan Menara Air",
      "type": "residential",
      "width": 10,
      "points": [
        [
          418.6,
          279.3
        ],
        [
          414.8,
          282.7
        ],
        [
          413.3,
          286.6
        ],
        [
          413.1,
          300.4
        ],
        [
          410.9,
          306.7
        ],
        [
          410.5,
          329.2
        ],
        [
          407.9,
          329.9
        ],
        [
          407.7,
          334.7
        ]
      ]
    },
    {
      "name": "Jalan Bukit Duri Utara Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          449.7,
          308.7
        ],
        [
          456.6,
          317.1
        ],
        [
          463.2,
          322
        ],
        [
          473.4,
          327.4
        ],
        [
          482.7,
          330.8
        ],
        [
          492,
          332.8
        ],
        [
          502.8,
          333.3
        ],
        [
          511.2,
          331.7
        ],
        [
          522.8,
          327.4
        ],
        [
          561.4,
          307.2
        ],
        [
          562.9,
          305.8
        ],
        [
          562.5,
          303.7
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Selatan II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          444.2,
          299.5
        ],
        [
          438.5,
          290.1
        ]
      ]
    },
    {
      "name": "Jalan Bukit Duri Plaza",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          565.5,
          293.2
        ],
        [
          562,
          295.4
        ]
      ]
    },
    {
      "name": "Jalan Taman Bukit Duri",
      "type": "residential",
      "width": 10,
      "points": [
        [
          508.6,
          330.8
        ],
        [
          504.7,
          322.9
        ],
        [
          503.8,
          317.4
        ],
        [
          505.4,
          315
        ],
        [
          507.5,
          314.2
        ],
        [
          511,
          314.4
        ],
        [
          511.9,
          315.3
        ],
        [
          516.1,
          323.4
        ],
        [
          517.3,
          328.6
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Selatan IX",
      "type": "residential",
      "width": 10,
      "points": [
        [
          458.9,
          305.8
        ],
        [
          467.8,
          315
        ],
        [
          479.6,
          322.6
        ],
        [
          486.7,
          324.7
        ],
        [
          495.6,
          325.6
        ]
      ]
    },
    {
      "name": "Jalan Sawo Kecik",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          456.2,
          382.3
        ],
        [
          453.7,
          390
        ],
        [
          454.4,
          391.5
        ],
        [
          452.6,
          401.7
        ],
        [
          453,
          419.8
        ],
        [
          452.2,
          425.2
        ]
      ]
    },
    {
      "name": "Jalan Cucarawa",
      "type": "residential",
      "width": 10,
      "points": [
        [
          441,
          357.9
        ],
        [
          475.9,
          365.9
        ],
        [
          486.1,
          365.9
        ]
      ]
    },
    {
      "name": "Jalan Bukit Duri Tanjakan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          509,
          332.3
        ],
        [
          508.3,
          368.2
        ],
        [
          506.7,
          377.3
        ],
        [
          508,
          385.6
        ],
        [
          508.6,
          409.6
        ],
        [
          510.3,
          427.8
        ]
      ]
    },
    {
      "name": "Jalan Kampung Melayu Kecil 3",
      "type": "residential",
      "width": 10,
      "points": [
        [
          509.9,
          419.8
        ],
        [
          563.6,
          416.3
        ]
      ]
    },
    {
      "name": "Jalan Kampung Melayu Kecil 5",
      "type": "residential",
      "width": 10,
      "points": [
        [
          509.4,
          409.6
        ],
        [
          537.1,
          409
        ],
        [
          538.2,
          405.3
        ],
        [
          557.1,
          402.2
        ]
      ]
    },
    {
      "name": "Jalan Kampung Melayu Kecil 1",
      "type": "residential",
      "width": 10,
      "points": [
        [
          551.7,
          384.4
        ],
        [
          545.9,
          384.3
        ],
        [
          545.2,
          387
        ],
        [
          550.4,
          390.6
        ],
        [
          554.8,
          395.3
        ],
        [
          558.6,
          406
        ],
        [
          563.7,
          416.3
        ],
        [
          563.8,
          425.2
        ]
      ]
    },
    {
      "name": "Jalan Kampung Melayu Kecil 2",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          573.9,
          416.3
        ],
        [
          584.6,
          416.7
        ],
        [
          589.9,
          416
        ],
        [
          592.4,
          413.2
        ],
        [
          593.4,
          407.5
        ],
        [
          590.9,
          400.5
        ],
        [
          581.1,
          390.7
        ],
        [
          573,
          380.9
        ],
        [
          567.5,
          371.5
        ],
        [
          563.2,
          357.8
        ],
        [
          560.8,
          355.3
        ],
        [
          557.5,
          353.8
        ],
        [
          553.6,
          353.3
        ],
        [
          550.6,
          353.6
        ],
        [
          547,
          355.6
        ],
        [
          545.4,
          359
        ],
        [
          545.2,
          361.6
        ],
        [
          548.1,
          366
        ],
        [
          549.4,
          371.4
        ],
        [
          548.2,
          375.6
        ],
        [
          545.2,
          379
        ],
        [
          539.4,
          381.2
        ],
        [
          533.1,
          381.7
        ],
        [
          524.6,
          378.7
        ],
        [
          522.2,
          376.8
        ],
        [
          520.8,
          371.2
        ],
        [
          530.9,
          348.1
        ],
        [
          543.2,
          333.1
        ],
        [
          550.1,
          321.2
        ],
        [
          555.2,
          316.6
        ],
        [
          564.3,
          310.4
        ]
      ]
    },
    {
      "name": "Jalan Bukit Duri Timur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          486.1,
          365.9
        ],
        [
          482.5,
          358.5
        ],
        [
          476.1,
          348.5
        ],
        [
          455.5,
          321
        ],
        [
          447,
          311.8
        ]
      ]
    },
    {
      "name": "Jalan Kutilang",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          460.8,
          331.6
        ],
        [
          459,
          338.8
        ],
        [
          456,
          361.3
        ]
      ]
    },
    {
      "name": "Jalan Perkutut",
      "type": "residential",
      "width": 10,
      "points": [
        [
          438.9,
          368.7
        ],
        [
          442.9,
          346.4
        ],
        [
          443.3,
          334.4
        ]
      ]
    },
    {
      "name": "Jalan Bukit Duri Permai",
      "type": "residential",
      "width": 10,
      "points": [
        [
          545.1,
          296.8
        ],
        [
          514.6,
          301.6
        ]
      ]
    },
    {
      "name": "Jalan Bukit Duri Permai",
      "type": "residential",
      "width": 10,
      "points": [
        [
          514.6,
          301.6
        ],
        [
          523,
          311.1
        ],
        [
          526.3,
          312.5
        ],
        [
          533.2,
          312.3
        ],
        [
          545,
          306.1
        ],
        [
          545.9,
          305
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Barat 2",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          588.7,
          352.3
        ],
        [
          631.7,
          347.7
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Barat III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          598.8,
          374.6
        ],
        [
          634.5,
          372.7
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Barat IV",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          634.4,
          388.8
        ],
        [
          604.5,
          393.5
        ]
      ]
    },
    {
      "name": "Jalan Kober",
      "type": "residential",
      "width": 10,
      "points": [
        [
          699.5,
          418.6
        ],
        [
          698.3,
          392.1
        ],
        [
          694.4,
          367.6
        ],
        [
          691.7,
          364
        ]
      ]
    },
    {
      "name": "Jalan Kober Pedati",
      "type": "residential",
      "width": 10,
      "points": [
        [
          662.2,
          418.6
        ],
        [
          655.4,
          393.2
        ],
        [
          653.5,
          388.6
        ]
      ]
    },
    {
      "name": "Jalan Kober Kecil",
      "type": "residential",
      "width": 10,
      "points": [
        [
          656.6,
          384
        ],
        [
          658.2,
          386.4
        ],
        [
          697.2,
          385
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Barat I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          666.6,
          291.6
        ],
        [
          667.3,
          332.8
        ]
      ]
    },
    {
      "name": "Jalan Warung Asem",
      "type": "residential",
      "width": 10,
      "points": [
        [
          679.1,
          332
        ],
        [
          706.3,
          330.3
        ],
        [
          712.2,
          330.8
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          653.2,
          373.8
        ],
        [
          646.6,
          352.7
        ],
        [
          639.1,
          334.1
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Barat III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          633.6,
          323.7
        ],
        [
          667.1,
          322.7
        ]
      ]
    },
    {
      "name": "Jalan Mesjid 1",
      "type": "residential",
      "width": 10,
      "points": [
        [
          568.2,
          434.2
        ],
        [
          575.4,
          444.2
        ],
        [
          577.3,
          449.8
        ],
        [
          577.8,
          454.3
        ],
        [
          576.9,
          455.7
        ],
        [
          576.6,
          460.1
        ],
        [
          576.8,
          470
        ]
      ]
    },
    {
      "name": "Jalan Pedati Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          622.9,
          448.5
        ],
        [
          629,
          450.6
        ],
        [
          635.2,
          454
        ],
        [
          666.8,
          451.2
        ]
      ]
    },
    {
      "name": "Jalan Kebon Sayur",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          575.4,
          502.7
        ],
        [
          586.7,
          502.8
        ],
        [
          590.2,
          502.4
        ],
        [
          591.6,
          500.9
        ],
        [
          608,
          499.8
        ]
      ]
    },
    {
      "name": "Jalan Bonang",
      "type": "residential",
      "width": 10,
      "points": [
        [
          323.1,
          137.1
        ],
        [
          347.1,
          113.3
        ],
        [
          350.6,
          108
        ]
      ]
    },
    {
      "name": "Jalan Talang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          375.8,
          69.8
        ],
        [
          373.5,
          74.4
        ],
        [
          370.9,
          77.2
        ],
        [
          373.7,
          86.6
        ],
        [
          365.2,
          90.2
        ]
      ]
    },
    {
      "name": "Jalan Dempo",
      "type": "residential",
      "width": 10,
      "points": [
        [
          403.7,
          114.8
        ],
        [
          397.2,
          149.5
        ]
      ]
    },
    {
      "name": "Jalan Matraman Dalam II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          403.7,
          114.8
        ],
        [
          447.1,
          122.8
        ]
      ]
    },
    {
      "name": "Jalan Matraman Dalam III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          407,
          150.5
        ],
        [
          409.2,
          140.1
        ],
        [
          436,
          145.7
        ]
      ]
    },
    {
      "name": "Jalan Kesatrian II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          479.7,
          204.8
        ],
        [
          514.3,
          204.7
        ]
      ]
    },
    {
      "name": "Jalan Slamet Riyadi IV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          492.6,
          247.2
        ],
        [
          486.1,
          240.2
        ],
        [
          479.5,
          236.6
        ],
        [
          459.8,
          231
        ],
        [
          451.6,
          227.4
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          377.8,
          67.4
        ],
        [
          384.2,
          72.5
        ],
        [
          389.3,
          78.3
        ],
        [
          398.5,
          91.6
        ]
      ]
    },
    {
      "name": "Jalan Tebet Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          453.9,
          475
        ],
        [
          414.6,
          497
        ]
      ]
    },
    {
      "name": "Jalan Puma Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          397,
          -554.6
        ],
        [
          428.3,
          -560.3
        ]
      ]
    },
    {
      "name": "Jalan Puma Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          405.4,
          -553.9
        ],
        [
          400.1,
          -553
        ],
        [
          398.1,
          -551.9
        ],
        [
          397.4,
          -550.6
        ]
      ]
    },
    {
      "name": "Jalan Utan Panjang Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          410.6,
          -367.2
        ],
        [
          413.7,
          -429.9
        ]
      ]
    },
    {
      "name": "Jalan Sunter Bendungan Jago",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          537.5,
          -565
        ],
        [
          503.3,
          -559.9
        ],
        [
          499.8,
          -557.9
        ],
        [
          486.4,
          -543.3
        ],
        [
          480,
          -534.8
        ],
        [
          455.4,
          -492.8
        ]
      ]
    },
    {
      "name": "Jalan Timah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          420.1,
          -326
        ],
        [
          440.9,
          -326.4
        ]
      ]
    },
    {
      "name": "Jalan Sukamulya Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          414.6,
          -367
        ],
        [
          413,
          -334.1
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "primary",
      "width": 18,
      "points": [
        [
          413.2,
          -451.7
        ],
        [
          411.4,
          -453.9
        ],
        [
          410.3,
          -457.5
        ]
      ]
    },
    {
      "name": "Jalan Garuda",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          317,
          -473.7
        ],
        [
          396.7,
          -495.1
        ],
        [
          398.9,
          -496.4
        ],
        [
          400.8,
          -499.6
        ]
      ]
    },
    {
      "name": "Jalan Garuda",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          402,
          -491.5
        ],
        [
          397.5,
          -493
        ],
        [
          369.9,
          -486.2
        ]
      ]
    },
    {
      "name": "Jalan Utan Panjang Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          415.3,
          -451.3
        ],
        [
          422.1,
          -446.4
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          365.1,
          -595.8
        ],
        [
          405.8,
          -602.3
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          365.4,
          -594.1
        ],
        [
          332,
          -588.8
        ],
        [
          329,
          -587.4
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          475.8,
          -615
        ],
        [
          472.9,
          -611.3
        ],
        [
          468.6,
          -608.1
        ],
        [
          465.1,
          -607.2
        ],
        [
          455.2,
          -606.7
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          475.3,
          -609.9
        ],
        [
          469.6,
          -610.4
        ],
        [
          446.3,
          -606.7
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          498.6,
          -599.1
        ],
        [
          520.8,
          -587.1
        ]
      ]
    },
    {
      "name": "Jalan Danau Indah Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          791.5,
          -545.4
        ],
        [
          795.2,
          -553.7
        ],
        [
          796.8,
          -561.1
        ],
        [
          796.7,
          -585.7
        ]
      ]
    },
    {
      "name": "Jalan Danau Indah Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          798.4,
          -585.6
        ],
        [
          798.8,
          -568.5
        ],
        [
          798.2,
          -557.6
        ],
        [
          794.9,
          -546.3
        ]
      ]
    },
    {
      "name": "Jalan Sunter Indah Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          748,
          -582.2
        ],
        [
          796.7,
          -586.7
        ]
      ]
    },
    {
      "name": "Jalan Dakota Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          478.9,
          -538.9
        ],
        [
          497.3,
          -559.9
        ],
        [
          505.4,
          -564.6
        ],
        [
          519.3,
          -581.2
        ],
        [
          519.7,
          -583.5
        ]
      ]
    },
    {
      "name": "Jalan Casa",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          407,
          -499.7
        ],
        [
          410.3,
          -498.1
        ]
      ]
    },
    {
      "name": "Jalan Casa",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          437,
          -502.9
        ],
        [
          434.6,
          -500.6
        ],
        [
          423.2,
          -498.6
        ]
      ]
    },
    {
      "name": "Jalan Bendungan Jago",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          483.2,
          -473.4
        ],
        [
          457.7,
          -491.3
        ]
      ]
    },
    {
      "name": "Jalan Sumur Batu",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          674.7,
          -385.7
        ],
        [
          650.6,
          -396.6
        ],
        [
          644.1,
          -399
        ],
        [
          630.3,
          -402
        ],
        [
          616.4,
          -408.7
        ]
      ]
    },
    {
      "name": "Jalan Serdang Baru",
      "type": "residential",
      "width": 10,
      "points": [
        [
          596.4,
          -541.3
        ],
        [
          568.7,
          -491
        ]
      ]
    },
    {
      "name": "Jalan Boulevard Barat",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          948.4,
          -615
        ],
        [
          960,
          -608.2
        ]
      ]
    },
    {
      "name": "Jalan Bukit Gading Raya Boulevard",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          960,
          -425.6
        ],
        [
          946,
          -401.7
        ],
        [
          937.2,
          -384.2
        ]
      ]
    },
    {
      "name": "Jalan Gabus",
      "type": "residential",
      "width": 10,
      "points": [
        [
          665.8,
          -516.6
        ],
        [
          661.8,
          -521.2
        ],
        [
          650.8,
          -527.1
        ],
        [
          650.5,
          -528.2
        ],
        [
          682,
          -583.4
        ]
      ]
    },
    {
      "name": "Jalan Kepu Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          318.9,
          -378.9
        ],
        [
          320.4,
          -394.7
        ],
        [
          317,
          -412.1
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Utara",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          458.2,
          -399.1
        ],
        [
          460.2,
          -387.9
        ],
        [
          487.6,
          -299.8
        ]
      ]
    },
    {
      "name": "Jalan Tembaga Dalam I",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          480,
          -298.6
        ],
        [
          478.8,
          -306.7
        ],
        [
          461.2,
          -303.7
        ],
        [
          452.8,
          -304.5
        ],
        [
          451.7,
          -305.3
        ],
        [
          447,
          -304.8
        ]
      ]
    },
    {
      "name": "Jalan Sunter Indah VI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          748.1,
          -580.9
        ],
        [
          744.4,
          -615
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Baru Barat",
      "type": "residential",
      "width": 10,
      "points": [
        [
          518.7,
          -403.2
        ],
        [
          516.9,
          -396.1
        ],
        [
          513.4,
          -367.6
        ]
      ]
    },
    {
      "name": "Jalan Keselamatan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          330.5,
          374.9
        ],
        [
          337,
          373.4
        ],
        [
          341.6,
          373.8
        ],
        [
          343,
          375.9
        ],
        [
          359.2,
          378.5
        ]
      ]
    },
    {
      "name": "Jalan Tabah Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          844.9,
          -451.3
        ],
        [
          824.9,
          -417
        ]
      ]
    },
    {
      "name": "Jalan Pulau Karya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          897.9,
          -544.4
        ],
        [
          928.8,
          -526.4
        ]
      ]
    },
    {
      "name": "Jalan Tabah Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          901.3,
          -550.3
        ],
        [
          867,
          -489.6
        ]
      ]
    },
    {
      "name": "Jalan Kebon Nanas",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          754.9,
          524.1
        ],
        [
          764.3,
          524.3
        ]
      ]
    },
    {
      "name": "Jalan Kebon Kosong Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          351.5,
          -433.3
        ],
        [
          356.6,
          -422.2
        ]
      ]
    },
    {
      "name": "Jalan Kebon Kosong Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          356.6,
          -422.2
        ],
        [
          359.3,
          -390.4
        ],
        [
          361.2,
          -380.4
        ]
      ]
    },
    {
      "name": "Jalan Cakra Wijaya II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          920.8,
          501
        ],
        [
          924.5,
          504
        ],
        [
          925.5,
          506.4
        ],
        [
          925.2,
          508.6
        ],
        [
          909.6,
          533
        ]
      ]
    },
    {
      "name": "Jalan Media Massa",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          890,
          519.1
        ],
        [
          872.1,
          544.1
        ],
        [
          871.5,
          550.8
        ]
      ]
    },
    {
      "name": "Jalan Nusa Indah Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          925.3,
          544.4
        ],
        [
          937,
          551.4
        ]
      ]
    },
    {
      "name": "Jalan Cakra Wijaya I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          912.4,
          497.4
        ],
        [
          904.8,
          496.7
        ],
        [
          890,
          519.1
        ]
      ]
    },
    {
      "name": "Jalan Cakra Wijaya V",
      "type": "residential",
      "width": 10,
      "points": [
        [
          951.4,
          537.7
        ],
        [
          920.8,
          515.8
        ]
      ]
    },
    {
      "name": "Jalan Cakra Wijaya IX",
      "type": "residential",
      "width": 10,
      "points": [
        [
          877.1,
          522.5
        ],
        [
          881.2,
          518.4
        ],
        [
          894,
          499.5
        ],
        [
          896.5,
          500
        ],
        [
          900.3,
          496
        ],
        [
          904.3,
          497.2
        ]
      ]
    },
    {
      "name": "Jalan Catur Tunggal",
      "type": "residential",
      "width": 10,
      "points": [
        [
          860.7,
          517
        ],
        [
          854.8,
          548.4
        ]
      ]
    },
    {
      "name": "Jalan Koran",
      "type": "residential",
      "width": 10,
      "points": [
        [
          890.9,
          560
        ],
        [
          898.9,
          547.5
        ],
        [
          909.1,
          533.6
        ]
      ]
    },
    {
      "name": "Jalan Repoter",
      "type": "residential",
      "width": 10,
      "points": [
        [
          915.4,
          546.1
        ],
        [
          890.7,
          527.3
        ]
      ]
    },
    {
      "name": "Jalan Panca Warga Satu",
      "type": "residential",
      "width": 10,
      "points": [
        [
          809.2,
          560
        ],
        [
          809.7,
          543.2
        ],
        [
          804.7,
          526.2
        ]
      ]
    },
    {
      "name": "Jalan Kebon Nanas Selatan II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          682.8,
          526.1
        ],
        [
          683.9,
          560
        ]
      ]
    },
    {
      "name": "Jalan Kebon Nanas Selatan I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          715.4,
          524.2
        ],
        [
          659.7,
          527.8
        ]
      ]
    },
    {
      "name": "Jalan Sunter Indah IV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          795.6,
          -608
        ],
        [
          746.3,
          -602.8
        ]
      ]
    },
    {
      "name": "Jalan Donald Isaac Panjaitan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          742.5,
          312.4
        ],
        [
          729.9,
          325.6
        ],
        [
          725.6,
          336
        ]
      ]
    },
    {
      "name": "Jalan Sunter Mas Timur Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          708.3,
          -524.5
        ],
        [
          699.6,
          -575.2
        ]
      ]
    },
    {
      "name": "Jalan Sunter Indah II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          750.8,
          -593.1
        ],
        [
          789.9,
          -597
        ]
      ]
    },
    {
      "name": "Jalan Sunter Indah Kirana",
      "type": "residential",
      "width": 10,
      "points": [
        [
          777.5,
          -548.4
        ],
        [
          773.8,
          -582.7
        ]
      ]
    },
    {
      "name": "Jalan Sunter Jaya Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          791.5,
          -545.4
        ],
        [
          790,
          -544.6
        ],
        [
          778.8,
          -526.4
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kirana IV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          722.7,
          -578.2
        ],
        [
          726.9,
          -542
        ]
      ]
    },
    {
      "name": "Jalan Sunter Mas Timur Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          700.8,
          -575.5
        ],
        [
          709.5,
          -524.7
        ]
      ]
    },
    {
      "name": "Jalan Sunter Mas Barat I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          667.7,
          -515.6
        ],
        [
          688.9,
          -551
        ]
      ]
    },
    {
      "name": "Jalan Sunter Mas Barat 2",
      "type": "residential",
      "width": 10,
      "points": [
        [
          679.9,
          -548.4
        ],
        [
          663.4,
          -520.3
        ]
      ]
    },
    {
      "name": "Jalan Haji Mawar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          672.1,
          -589.3
        ],
        [
          642.7,
          -538.2
        ],
        [
          641.1,
          -535.9
        ],
        [
          634.5,
          -530.8
        ],
        [
          630.8,
          -525.6
        ]
      ]
    },
    {
      "name": "Jalan Sunter Jaya VII A",
      "type": "residential",
      "width": 10,
      "points": [
        [
          711,
          -507.6
        ],
        [
          716.9,
          -505.7
        ],
        [
          720.4,
          -506
        ],
        [
          723.6,
          -505.2
        ],
        [
          728.1,
          -509.2
        ],
        [
          734.4,
          -508.7
        ],
        [
          737.9,
          -508.2
        ],
        [
          745.3,
          -504.1
        ]
      ]
    },
    {
      "name": "Jalan Mandor Iren",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          778.8,
          -526.4
        ],
        [
          764,
          -497.6
        ],
        [
          742.8,
          -459.9
        ]
      ]
    },
    {
      "name": "Jalan Sunter Jaya III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          595.3,
          -560.5
        ],
        [
          589.3,
          -594
        ]
      ]
    },
    {
      "name": "Jalan Krida Wiramala",
      "type": "residential",
      "width": 10,
      "points": [
        [
          615.2,
          -598.6
        ],
        [
          621.3,
          -564.4
        ]
      ]
    },
    {
      "name": "Jalan Sunter Jaya 2 A",
      "type": "residential",
      "width": 10,
      "points": [
        [
          543.1,
          -593.3
        ],
        [
          570,
          -577.9
        ]
      ]
    },
    {
      "name": "Jalan Sunter Jaya IV A",
      "type": "residential",
      "width": 10,
      "points": [
        [
          625.2,
          -548.3
        ],
        [
          616.3,
          -548.4
        ],
        [
          609.7,
          -550.3
        ],
        [
          599.9,
          -554.2
        ],
        [
          592.2,
          -559.4
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Mas Barat",
      "type": "unclassified",
      "width": 10,
      "points": [
        [
          714.9,
          -404.2
        ],
        [
          707.6,
          -425.4
        ],
        [
          707.9,
          -430.1
        ],
        [
          708.4,
          -432
        ],
        [
          727.1,
          -463.3
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Mas Utara",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          729.4,
          -464.2
        ],
        [
          743.8,
          -455.7
        ],
        [
          757.6,
          -445.1
        ],
        [
          759.8,
          -444.2
        ],
        [
          766,
          -444.2
        ],
        [
          796.3,
          -451.6
        ],
        [
          797.5,
          -451.3
        ]
      ]
    },
    {
      "name": "Jalan Kodam Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          692.7,
          -428.2
        ],
        [
          702.2,
          -397.4
        ]
      ]
    },
    {
      "name": "Jalan Pualam Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          627.1,
          -513.1
        ],
        [
          660.3,
          -495.5
        ]
      ]
    },
    {
      "name": "Jalan Basoka",
      "type": "residential",
      "width": 10,
      "points": [
        [
          712.7,
          -462.5
        ],
        [
          695.9,
          -433.7
        ]
      ]
    },
    {
      "name": "Jalan Zamrud Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          648.7,
          -458.3
        ],
        [
          671.1,
          -499.7
        ]
      ]
    },
    {
      "name": "Jalan Bren",
      "type": "residential",
      "width": 10,
      "points": [
        [
          689.7,
          -480.5
        ],
        [
          668.4,
          -442.1
        ]
      ]
    },
    {
      "name": "Jalan Berlian Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          681.4,
          -465.4
        ],
        [
          620.2,
          -498.8
        ]
      ]
    },
    {
      "name": "Jalan Mulia",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          684.6,
          -432.7
        ],
        [
          663,
          -397.5
        ]
      ]
    },
    {
      "name": "Jalan Pirus",
      "type": "residential",
      "width": 10,
      "points": [
        [
          640.1,
          -457.7
        ],
        [
          627.6,
          -434.5
        ],
        [
          629.5,
          -429.7
        ]
      ]
    },
    {
      "name": "Jalan Lancar",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          675.4,
          -417.2
        ],
        [
          701,
          -401.4
        ]
      ]
    },
    {
      "name": "Jalan Mutiara",
      "type": "residential",
      "width": 10,
      "points": [
        [
          592.1,
          -441.5
        ],
        [
          608.7,
          -431.9
        ],
        [
          621.2,
          -425.8
        ],
        [
          641.9,
          -435.7
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Baru VII",
      "type": "residential",
      "width": 10,
      "points": [
        [
          561.6,
          -378.9
        ],
        [
          524,
          -399.4
        ]
      ]
    },
    {
      "name": "Jalan Sumur Batu 1",
      "type": "residential",
      "width": 10,
      "points": [
        [
          592.6,
          -379.7
        ],
        [
          609.3,
          -412.1
        ]
      ]
    },
    {
      "name": "Jalan Sumur Batu 2",
      "type": "residential",
      "width": 10,
      "points": [
        [
          615.3,
          -408.8
        ],
        [
          597.8,
          -376.5
        ]
      ]
    },
    {
      "name": "Jalan Sudiro",
      "type": "residential",
      "width": 10,
      "points": [
        [
          553.7,
          -362.1
        ],
        [
          584.3,
          -347.7
        ],
        [
          585.4,
          -346.2
        ],
        [
          586.6,
          -338.2
        ]
      ]
    },
    {
      "name": "Jalan Kampung Irian II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          534.9,
          -535.3
        ],
        [
          541.3,
          -549
        ],
        [
          546.8,
          -546.8
        ],
        [
          556.2,
          -563.9
        ]
      ]
    },
    {
      "name": "Jalan Taruna Jaya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          522.4,
          -540.5
        ],
        [
          498.4,
          -489.2
        ],
        [
          490.1,
          -490.1
        ],
        [
          478.5,
          -493.8
        ]
      ]
    },
    {
      "name": "Jalan Serdang I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          552.4,
          -494.9
        ],
        [
          557.2,
          -505
        ],
        [
          582.1,
          -549.2
        ]
      ]
    },
    {
      "name": "Jalan Serdang Baru",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          580.7,
          -550.1
        ],
        [
          556.9,
          -563.5
        ]
      ]
    },
    {
      "name": "Jalan Panca Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          497.3,
          -555.1
        ],
        [
          514.5,
          -546.6
        ],
        [
          516.3,
          -542.9
        ],
        [
          531.1,
          -537.6
        ],
        [
          544.4,
          -530.5
        ]
      ]
    },
    {
      "name": "Jalan Lapangan Pors Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          557.4,
          -443.5
        ],
        [
          564.6,
          -457
        ],
        [
          564,
          -459
        ],
        [
          565.8,
          -462.9
        ],
        [
          579.6,
          -488
        ]
      ]
    },
    {
      "name": "Jalan Serdang Baru XIII",
      "type": "residential",
      "width": 10,
      "points": [
        [
          587.9,
          -500.6
        ],
        [
          607,
          -535.4
        ]
      ]
    },
    {
      "name": "Jalan Serdang Baru XII",
      "type": "residential",
      "width": 10,
      "points": [
        [
          585.8,
          -485.7
        ],
        [
          607.4,
          -523.1
        ]
      ]
    },
    {
      "name": "Jalan Taruna Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          476.9,
          -478
        ],
        [
          481.4,
          -485
        ],
        [
          491.8,
          -482.2
        ],
        [
          493.8,
          -483.6
        ],
        [
          499.5,
          -484.9
        ],
        [
          515.1,
          -485.5
        ],
        [
          538.7,
          -489.8
        ],
        [
          541.4,
          -493.1
        ],
        [
          544.2,
          -499.3
        ]
      ]
    },
    {
      "name": "Jalan Serdang Baru I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          544.2,
          -499.3
        ],
        [
          552.4,
          -494.9
        ]
      ]
    },
    {
      "name": "Jalan Sumber Pelita",
      "type": "residential",
      "width": 10,
      "points": [
        [
          594.5,
          -480.6
        ],
        [
          589.5,
          -467.9
        ],
        [
          585.7,
          -460.8
        ],
        [
          587.1,
          -458.9
        ],
        [
          582.1,
          -449.1
        ],
        [
          575.3,
          -430.2
        ]
      ]
    },
    {
      "name": "Jalan Nawa",
      "type": "residential",
      "width": 10,
      "points": [
        [
          539.5,
          -532.9
        ],
        [
          533.1,
          -520.8
        ],
        [
          533.2,
          -518.8
        ],
        [
          526.4,
          -504.8
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Baru Tengah",
      "type": "residential",
      "width": 10,
      "points": [
        [
          528.5,
          -330.3
        ],
        [
          535.8,
          -371.4
        ],
        [
          542,
          -389.7
        ],
        [
          550.5,
          -406.6
        ]
      ]
    },
    {
      "name": "Jalan F",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          458.2,
          -399.1
        ],
        [
          457.8,
          -403.7
        ],
        [
          473.3,
          -404.3
        ],
        [
          482.5,
          -418.1
        ]
      ]
    },
    {
      "name": "Jalan E Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          546.8,
          -431.2
        ],
        [
          525.3,
          -445.5
        ],
        [
          516.3,
          -452.8
        ],
        [
          508.2,
          -457.5
        ]
      ]
    },
    {
      "name": "Jalan N",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          429,
          -430
        ],
        [
          466.4,
          -404
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Sari III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          511.4,
          -355.2
        ],
        [
          486.6,
          -355.7
        ],
        [
          470.6,
          -353
        ]
      ]
    },
    {
      "name": "Jalan Tembaga Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          440.9,
          -326.4
        ],
        [
          441.2,
          -292.8
        ]
      ]
    },
    {
      "name": "Jalan Utan Panjang III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          414.6,
          -367
        ],
        [
          424.3,
          -366.1
        ],
        [
          437.4,
          -366.8
        ],
        [
          451.3,
          -368.7
        ],
        [
          452,
          -368.4
        ],
        [
          452.5,
          -365.4
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Baru I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          535.7,
          -329.8
        ],
        [
          542.9,
          -365.3
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Sari V",
      "type": "residential",
      "width": 10,
      "points": [
        [
          513.4,
          -367.6
        ],
        [
          500.2,
          -371.6
        ],
        [
          466.5,
          -367.8
        ]
      ]
    },
    {
      "name": "Jalan Haji Ung",
      "type": "residential",
      "width": 10,
      "points": [
        [
          484.5,
          -438.2
        ],
        [
          480.3,
          -439.5
        ],
        [
          467.3,
          -440
        ],
        [
          462.8,
          -441.6
        ],
        [
          459.9,
          -440.8
        ],
        [
          452.2,
          -444.3
        ],
        [
          450.6,
          -443.2
        ],
        [
          447.1,
          -443.6
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Sari I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          477.2,
          -332.3
        ],
        [
          481.7,
          -332.9
        ],
        [
          507.2,
          -331.5
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Baru III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          554,
          -362.7
        ],
        [
          548.8,
          -364.6
        ],
        [
          513.4,
          -367.6
        ]
      ]
    },
    {
      "name": "Jalan E2",
      "type": "residential",
      "width": 10,
      "points": [
        [
          482.5,
          -418.1
        ],
        [
          497.4,
          -407.8
        ],
        [
          509.1,
          -403.8
        ]
      ]
    },
    {
      "name": "Jalan Kwitang Timur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          404.9,
          -297.3
        ],
        [
          355.9,
          -293.7
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Timur Dalam",
      "type": "residential",
      "width": 10,
      "points": [
        [
          346,
          -285
        ],
        [
          346.6,
          -328.8
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Timur IV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          338.2,
          -354.3
        ],
        [
          340.2,
          -353.6
        ],
        [
          368.2,
          -354.5
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "primary",
      "width": 18,
      "points": [
        [
          406.4,
          -491.9
        ],
        [
          412,
          -461.9
        ]
      ]
    },
    {
      "name": "Jalan Angkasa Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          352.2,
          -548.8
        ],
        [
          369.4,
          -550.4
        ],
        [
          387.1,
          -553.6
        ],
        [
          388.9,
          -554.4
        ],
        [
          390.2,
          -556.5
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          400.8,
          -499.6
        ],
        [
          393.5,
          -538.8
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "primary",
      "width": 18,
      "points": [
        [
          400.1,
          -527
        ],
        [
          403.4,
          -507.4
        ]
      ]
    },
    {
      "name": "Jalan Kemayoran Barat",
      "type": "residential",
      "width": 10,
      "points": [
        [
          328.2,
          -463
        ],
        [
          332.4,
          -451.3
        ],
        [
          338,
          -427.9
        ],
        [
          342,
          -416.8
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "primary",
      "width": 18,
      "points": [
        [
          383.8,
          -615
        ],
        [
          388.8,
          -588.4
        ]
      ]
    },
    {
      "name": "Jalan Rendani",
      "type": "unclassified",
      "width": 10,
      "points": [
        [
          328.2,
          -547.2
        ],
        [
          327.8,
          -554.2
        ],
        [
          340.2,
          -571.9
        ],
        [
          342.6,
          -574.3
        ],
        [
          344.4,
          -574.1
        ],
        [
          367.4,
          -557.2
        ],
        [
          368.8,
          -555.2
        ],
        [
          369.3,
          -551.8
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          378.3,
          -599.2
        ],
        [
          380.8,
          -600.2
        ],
        [
          381.7,
          -602.1
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          379.3,
          -595.1
        ],
        [
          333.8,
          -587.5
        ],
        [
          329,
          -587.4
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          449.4,
          -605.4
        ],
        [
          431.3,
          -602.8
        ]
      ]
    },
    {
      "name": "Jalan Dokter Saharjo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          317,
          345.3
        ],
        [
          326.5,
          369.3
        ],
        [
          334.4,
          380.8
        ],
        [
          343.8,
          397.8
        ],
        [
          345.7,
          403.5
        ]
      ]
    },
    {
      "name": "Jalan Bukit Duri Utara Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          562.5,
          303.7
        ],
        [
          562.3,
          297.9
        ]
      ]
    },
    {
      "name": "Jalan Bukit Duri Permai",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          562,
          295.4
        ],
        [
          562.3,
          290.5
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          446.3,
          -606.7
        ],
        [
          417.2,
          -602.2
        ]
      ]
    },
    {
      "name": "Jalan Daksina Pati Timur A",
      "type": "residential",
      "width": 10,
      "points": [
        [
          795.6,
          17.8
        ],
        [
          798.7,
          -16.7
        ]
      ]
    },
    {
      "name": "Jalan Balai Pustaka Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          841.4,
          101.2
        ],
        [
          846.2,
          85
        ],
        [
          847.5,
          74.2
        ],
        [
          847,
          63
        ],
        [
          842.8,
          24.8
        ]
      ]
    },
    {
      "name": "Jalan Persahabatan Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          888,
          101.2
        ],
        [
          886.4,
          166.5
        ]
      ]
    },
    {
      "name": "Jalan Paus Derpala Komplek Pertamina",
      "type": "residential",
      "width": 10,
      "points": [
        [
          951.8,
          7.6
        ],
        [
          951.4,
          -6.9
        ],
        [
          936.3,
          -6.9
        ],
        [
          935.3,
          -6.4
        ],
        [
          934.9,
          -2.4
        ]
      ]
    },
    {
      "name": "Jalan Perserikatan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          959.8,
          33.3
        ],
        [
          949.3,
          47.9
        ]
      ]
    },
    {
      "name": "Jalan Pegambiran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          946.8,
          61.5
        ],
        [
          948.1,
          69.1
        ],
        [
          951.8,
          79.1
        ],
        [
          952.4,
          84.4
        ]
      ]
    },
    {
      "name": "Jalan Perserikatan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          947.9,
          47.6
        ],
        [
          958.6,
          32.8
        ],
        [
          960,
          28.6
        ]
      ]
    },
    {
      "name": "Jalan Perserikatan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          960,
          25.7
        ],
        [
          959.9,
          23.5
        ]
      ]
    },
    {
      "name": "Jalan Pinang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          947.9,
          47.6
        ],
        [
          934.4,
          44.1
        ],
        [
          918.5,
          43.7
        ]
      ]
    },
    {
      "name": "Jalan Pegambiran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          951.1,
          84.1
        ],
        [
          949.7,
          77.3
        ],
        [
          945.8,
          65.9
        ],
        [
          945.5,
          61.7
        ]
      ]
    },
    {
      "name": "Jalan Raya Kayu Putih",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          959.2,
          -88.9
        ],
        [
          959.2,
          -114.9
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Baru Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          945.2,
          164.1
        ],
        [
          944.8,
          148.1
        ],
        [
          946.8,
          102.2
        ]
      ]
    },
    {
      "name": "Jalan Persahabatan Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          885.1,
          172.8
        ],
        [
          884.6,
          156.6
        ],
        [
          886.3,
          101.3
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Baru Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          960,
          214.7
        ],
        [
          948.6,
          189
        ],
        [
          946.5,
          182.5
        ],
        [
          945.2,
          164.1
        ]
      ]
    },
    {
      "name": "Jalan Pratekan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          858.7,
          -69.9
        ],
        [
          835.5,
          -67.1
        ],
        [
          826.8,
          -68.2
        ],
        [
          822.7,
          -71.1
        ],
        [
          819.4,
          -76.4
        ],
        [
          817.5,
          -84.2
        ],
        [
          817.4,
          -87.8
        ]
      ]
    },
    {
      "name": "Jalan Balap Sepeda IV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          907.1,
          -77.1
        ],
        [
          958.3,
          -85.2
        ]
      ]
    },
    {
      "name": "Jalan Kayu Jati V",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          890.9,
          -26.1
        ],
        [
          889.9,
          -35.2
        ],
        [
          894,
          -58.1
        ],
        [
          896.1,
          -62.6
        ]
      ]
    },
    {
      "name": "Jalan Kayu Jati IV",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          883.8,
          -32.3
        ],
        [
          884.8,
          -41.8
        ],
        [
          890.8,
          -63.6
        ]
      ]
    },
    {
      "name": "Jalan Kayu Jati V",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          906.1,
          -77.1
        ],
        [
          904.4,
          -71.6
        ],
        [
          896.1,
          -62.6
        ]
      ]
    },
    {
      "name": "Jalan Kayu Jati II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          862.8,
          -61.7
        ],
        [
          889.1,
          -65.2
        ],
        [
          888.1,
          -73.3
        ]
      ]
    },
    {
      "name": "Jalan Metro Jaya I",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          766.8,
          -164.1
        ],
        [
          765.7,
          -152.4
        ],
        [
          767.8,
          -126.4
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Jaya Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          904,
          323.2
        ],
        [
          905.5,
          332.5
        ],
        [
          905.2,
          335.5
        ],
        [
          894.7,
          359.2
        ],
        [
          885,
          383.9
        ]
      ]
    },
    {
      "name": "Jalan Komplek Cipinang Elok II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          923.3,
          404.8
        ],
        [
          921.1,
          411.9
        ],
        [
          917.1,
          419.6
        ],
        [
          897.7,
          436.9
        ],
        [
          895,
          440.7
        ],
        [
          892.8,
          446.3
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Lontar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          944.8,
          281.5
        ],
        [
          944.3,
          279.8
        ],
        [
          942.6,
          279
        ],
        [
          929.9,
          279.1
        ],
        [
          929,
          272.2
        ]
      ]
    },
    {
      "name": "Jalan Mulya Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          912.7,
          324.2
        ],
        [
          917.6,
          322.3
        ],
        [
          938,
          322.8
        ],
        [
          940.2,
          321.4
        ],
        [
          952.3,
          321.7
        ],
        [
          954.1,
          322.4
        ],
        [
          954.2,
          326.1
        ],
        [
          960,
          327.6
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Muara Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          947.1,
          466.3
        ],
        [
          938.8,
          463.9
        ],
        [
          936.3,
          466.9
        ],
        [
          933.2,
          467.8
        ],
        [
          924,
          464.2
        ],
        [
          914.6,
          464.7
        ],
        [
          896.4,
          462.7
        ],
        [
          887.6,
          462.8
        ],
        [
          875.2,
          460.2
        ],
        [
          857.8,
          455
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Muara",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          960,
          427.6
        ],
        [
          955.7,
          437.1
        ],
        [
          949.7,
          459.9
        ],
        [
          947.1,
          466.3
        ]
      ]
    },
    {
      "name": "Jalan K1",
      "type": "residential",
      "width": 10,
      "points": [
        [
          904.1,
          441.4
        ],
        [
          904.7,
          448.2
        ],
        [
          914.5,
          445.2
        ],
        [
          926.3,
          444.4
        ],
        [
          942.6,
          440.6
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Pulo",
      "type": "residential",
      "width": 10,
      "points": [
        [
          864.2,
          341.2
        ],
        [
          851.4,
          339.3
        ],
        [
          849.8,
          338.1
        ],
        [
          838.6,
          335.1
        ],
        [
          831.4,
          335.4
        ],
        [
          827.6,
          334.7
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Jaya I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          847.5,
          450.5
        ],
        [
          862,
          419.4
        ],
        [
          874.3,
          389.3
        ]
      ]
    },
    {
      "name": "Jalan Komplek Cipinang Elok I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          926.1,
          342.7
        ],
        [
          913.7,
          342.4
        ],
        [
          903.9,
          365.3
        ]
      ]
    },
    {
      "name": "Jalan Komplek Cipinang Elok II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          930.6,
          407.7
        ],
        [
          927.5,
          417
        ],
        [
          922.6,
          425.2
        ],
        [
          903.2,
          442.3
        ],
        [
          898.1,
          450
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Jaya II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          871.3,
          380.1
        ],
        [
          893.3,
          329.2
        ]
      ]
    },
    {
      "name": "Jalan Kebon Nanas Utara II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          718.5,
          504.5
        ],
        [
          680,
          507.3
        ]
      ]
    },
    {
      "name": "Jalan Haji Yahya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          661.7,
          485.7
        ],
        [
          669.8,
          484.8
        ],
        [
          717.6,
          483.7
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Jaya KK",
      "type": "residential",
      "width": 10,
      "points": [
        [
          854.2,
          437
        ],
        [
          825.5,
          421.9
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Jaya II A",
      "type": "residential",
      "width": 10,
      "points": [
        [
          845,
          359.5
        ],
        [
          871,
          360.5
        ],
        [
          878.5,
          363.1
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Jaya CC",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          838.6,
          392.2
        ],
        [
          867.8,
          405.1
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Lontar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          929,
          272.2
        ],
        [
          922.4,
          271.9
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Latihan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          865.7,
          304
        ],
        [
          898,
          302.2
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Besar",
      "type": "residential",
      "width": 10,
      "points": [
        [
          777,
          465.2
        ],
        [
          780.1,
          463.5
        ],
        [
          782,
          461.2
        ],
        [
          786.7,
          459.2
        ],
        [
          794.9,
          459.5
        ],
        [
          806.7,
          457.8
        ],
        [
          810.1,
          454.2
        ],
        [
          812.6,
          452.9
        ]
      ]
    },
    {
      "name": "Jalan IPN",
      "type": "residential",
      "width": 10,
      "points": [
        [
          774.4,
          533.1
        ],
        [
          775.2,
          524.4
        ],
        [
          777.4,
          521.8
        ],
        [
          783.4,
          509.3
        ],
        [
          788.4,
          502.1
        ],
        [
          784.9,
          494.5
        ],
        [
          784.7,
          487.8
        ]
      ]
    },
    {
      "name": "Jalan Pembina I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          843.9,
          487.7
        ],
        [
          852,
          490.7
        ],
        [
          866.1,
          491.4
        ],
        [
          868.1,
          484.4
        ]
      ]
    },
    {
      "name": "Jalan Basuki Rahmat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          732.1,
          413.3
        ],
        [
          734.2,
          429.5
        ]
      ]
    },
    {
      "name": "Jalan Tebet Dalam II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          382.2,
          454.7
        ],
        [
          384.2,
          455.2
        ]
      ]
    },
    {
      "name": "Jalan Harapan III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          916.7,
          -448
        ],
        [
          902.7,
          -456.1
        ],
        [
          876.4,
          -473.3
        ]
      ]
    },
    {
      "name": "Jalan Pulau Harapan II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          914.8,
          -443.3
        ],
        [
          874.2,
          -467.8
        ]
      ]
    },
    {
      "name": "Jalan Teguh II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          901.9,
          -485
        ],
        [
          893.2,
          -468.3
        ],
        [
          882.8,
          -451.8
        ]
      ]
    },
    {
      "name": "Jalan Teguh Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          922,
          -472.6
        ],
        [
          895.3,
          -489.1
        ],
        [
          882.2,
          -469.4
        ]
      ]
    },
    {
      "name": "Jalan Teluk Ratai II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          941,
          -421.7
        ],
        [
          957.9,
          -450.7
        ]
      ]
    },
    {
      "name": "Jalan Teluk Ratai III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          952.9,
          -453.9
        ],
        [
          935.7,
          -425.2
        ]
      ]
    },
    {
      "name": "Jalan Sentosa Barat",
      "type": "residential",
      "width": 10,
      "points": [
        [
          932.9,
          -465.8
        ],
        [
          915.4,
          -437.3
        ]
      ]
    },
    {
      "name": "Jalan Sentosa Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          938.8,
          -464.9
        ],
        [
          920.2,
          -434.4
        ]
      ]
    },
    {
      "name": "Jalan Pulau Galang",
      "type": "residential",
      "width": 10,
      "points": [
        [
          885.2,
          -521.4
        ],
        [
          940.4,
          -488.6
        ]
      ]
    },
    {
      "name": "Jalan Sentosa Barat I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          930.8,
          -468
        ],
        [
          919.1,
          -449.5
        ],
        [
          918.9,
          -446.9
        ],
        [
          911.2,
          -434.4
        ]
      ]
    },
    {
      "name": "Jalan Tangguh Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          835.8,
          -456.7
        ],
        [
          862.7,
          -440.6
        ],
        [
          872.9,
          -436
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Kali Sunter",
      "type": "residential",
      "width": 10,
      "points": [
        [
          823.1,
          -403.7
        ],
        [
          818.6,
          -406.8
        ],
        [
          815.5,
          -410.7
        ],
        [
          813.6,
          -414.7
        ],
        [
          813,
          -420.4
        ],
        [
          813.5,
          -425.1
        ],
        [
          815.2,
          -430.5
        ],
        [
          824.4,
          -444.1
        ],
        [
          826.3,
          -448.4
        ],
        [
          873.2,
          -527.8
        ],
        [
          898.5,
          -569.1
        ]
      ]
    },
    {
      "name": "Jalan Pulau Harapan Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          945,
          -419.3
        ],
        [
          871.9,
          -463.9
        ]
      ]
    },
    {
      "name": "Jalan Gading Raya 4",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          926.6,
          -371.8
        ],
        [
          929.1,
          -371
        ]
      ]
    },
    {
      "name": "Jalan Gading 12",
      "type": "residential",
      "width": 10,
      "points": [
        [
          901.3,
          -384.4
        ],
        [
          867,
          -405.2
        ]
      ]
    },
    {
      "name": "Jalan Pramuka Sari I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          665.5,
          -42.9
        ],
        [
          668.6,
          -57.9
        ],
        [
          669.9,
          -75.9
        ],
        [
          662.9,
          -129.6
        ]
      ]
    },
    {
      "name": "Gang Mohammad Ali IV",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          363.3,
          -276.1
        ],
        [
          406.8,
          -279
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Timur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          531.6,
          -312.8
        ],
        [
          534.6,
          -321
        ],
        [
          551.7,
          -357.8
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Barat I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          629.7,
          341.6
        ],
        [
          586.2,
          346.7
        ]
      ]
    },
    {
      "name": "Jalan Pedati Timur Dalam",
      "type": "residential",
      "width": 10,
      "points": [
        [
          671.8,
          444.4
        ],
        [
          704.7,
          442.4
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Baru Selatan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          698.5,
          277.5
        ],
        [
          642.1,
          278.7
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Kampung Pulo Gang III",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          577.9,
          320.6
        ],
        [
          565.4,
          329.4
        ],
        [
          541.9,
          351.9
        ],
        [
          532.4,
          366
        ],
        [
          528.5,
          373.2
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Barat Kampung Pulo Gang I",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          579.6,
          334.4
        ],
        [
          573.7,
          337
        ],
        [
          562.3,
          344.9
        ],
        [
          559.2,
          345.2
        ],
        [
          553.9,
          340.7
        ]
      ]
    },
    {
      "name": "Jalan Kayu Ramin",
      "type": "residential",
      "width": 10,
      "points": [
        [
          532.9,
          3.3
        ],
        [
          541.9,
          2.8
        ],
        [
          542.3,
          7.5
        ],
        [
          564.6,
          7.3
        ]
      ]
    },
    {
      "name": "Jalan Kebon Pala Gang XX",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          477,
          306.5
        ],
        [
          477.1,
          309.5
        ],
        [
          479.3,
          313.1
        ],
        [
          484,
          316.7
        ],
        [
          488.8,
          317.7
        ],
        [
          493.7,
          309.5
        ],
        [
          493.7,
          305.9
        ]
      ]
    },
    {
      "name": "Jalan Gading 1",
      "type": "residential",
      "width": 10,
      "points": [
        [
          797,
          159.2
        ],
        [
          796.8,
          154.6
        ],
        [
          803.5,
          152.2
        ],
        [
          809.5,
          147.4
        ],
        [
          827.1,
          143.8
        ]
      ]
    },
    {
      "name": "Jalan Kayu Manis V",
      "type": "residential",
      "width": 10,
      "points": [
        [
          530.2,
          108
        ],
        [
          573,
          102.8
        ]
      ]
    },
    {
      "name": "Jalan Kayu Manis VI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          535.6,
          124.6
        ],
        [
          578.4,
          119
        ]
      ]
    },
    {
      "name": "Jalan Kayu Manis 1",
      "type": "residential",
      "width": 10,
      "points": [
        [
          507.8,
          34.7
        ],
        [
          544,
          30.6
        ]
      ]
    },
    {
      "name": "Jalan Kayu Manis II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          512.4,
          48.6
        ],
        [
          548.9,
          43.5
        ]
      ]
    },
    {
      "name": "Jalan Kayu Manis III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          556.5,
          66
        ],
        [
          519.9,
          70.5
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Lama I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          732.2,
          279.8
        ],
        [
          732.6,
          270.8
        ],
        [
          731.5,
          231.3
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Lama II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          746.4,
          278.6
        ],
        [
          745.1,
          231
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Lama Selatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          922.7,
          245.8
        ],
        [
          918.2,
          253.5
        ],
        [
          913,
          257.9
        ],
        [
          908.1,
          259.6
        ],
        [
          809.2,
          264.8
        ]
      ]
    },
    {
      "name": "Jalan Wedana",
      "type": "residential",
      "width": 10,
      "points": [
        [
          667.1,
          441.7
        ],
        [
          638.7,
          441.4
        ],
        [
          621.7,
          442.7
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          743.4,
          -195.3
        ],
        [
          740.6,
          -153.5
        ],
        [
          738.2,
          -77
        ],
        [
          736.2,
          -53.3
        ],
        [
          732.8,
          -30.8
        ],
        [
          719.9,
          34.7
        ],
        [
          710.6,
          76.4
        ],
        [
          708.7,
          92
        ],
        [
          709.1,
          111.3
        ],
        [
          710.7,
          122.9
        ],
        [
          714.6,
          140.9
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          453.7,
          -606.7
        ],
        [
          449.4,
          -605.4
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          405.7,
          -600.5
        ],
        [
          365.4,
          -594.1
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          393.8,
          -597.1
        ],
        [
          390.8,
          -595.3
        ],
        [
          389.6,
          -592.7
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          394.1,
          -601.9
        ],
        [
          430.1,
          -607.7
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Barat 26",
      "type": "residential",
      "width": 10,
      "points": [
        [
          598,
          -338
        ],
        [
          613,
          -305.6
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          609.4,
          294.9
        ],
        [
          619.6,
          313
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          627.1,
          329.9
        ],
        [
          629.8,
          337.5
        ]
      ]
    },
    {
      "name": "Jalan Angkasa Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          317,
          -542
        ],
        [
          328.5,
          -544.9
        ],
        [
          337.8,
          -546.2
        ]
      ]
    },
    {
      "name": "Jalan Garuda",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          369.9,
          -486.2
        ],
        [
          363.6,
          -485.4
        ],
        [
          317,
          -472.8
        ]
      ]
    },
    {
      "name": "Jalan Industri Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          317,
          -588.5
        ],
        [
          333.6,
          -590.8
        ]
      ]
    },
    {
      "name": "Jalan Lapangan Ros I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          414.3,
          410.5
        ],
        [
          447.1,
          418.5
        ]
      ]
    },
    {
      "name": "Jalan Bacang",
      "type": "residential",
      "width": 10,
      "points": [
        [
          612.4,
          -63.8
        ],
        [
          611.9,
          -85.1
        ],
        [
          613.6,
          -92.3
        ],
        [
          612.2,
          -114.7
        ]
      ]
    },
    {
      "name": "Jalan The Green Pramuka Apartment",
      "type": "unclassified",
      "width": 10,
      "points": [
        [
          725,
          -90.3
        ],
        [
          679.4,
          -90.3
        ],
        [
          673.1,
          -92.2
        ],
        [
          667.9,
          -92.1
        ]
      ]
    },
    {
      "name": "Jalan Tebet Barat Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          392.1,
          560
        ],
        [
          389.3,
          553.7
        ],
        [
          388.5,
          548.6
        ],
        [
          388.9,
          544.4
        ],
        [
          390.9,
          538.8
        ],
        [
          397.3,
          528.4
        ],
        [
          400,
          522.2
        ],
        [
          402.4,
          499.9
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Baru Selatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          712.1,
          280.3
        ],
        [
          698.7,
          280.2
        ],
        [
          698.5,
          277.5
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Lama Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          786.9,
          271.5
        ],
        [
          770.1,
          277.3
        ],
        [
          725,
          280
        ]
      ]
    },
    {
      "name": "Jalan Dokter Saharjo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          350.1,
          196.3
        ],
        [
          347,
          203.2
        ]
      ]
    },
    {
      "name": "Jalan Dokter Saharjo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          360.5,
          188.8
        ],
        [
          356.3,
          192.1
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          355.3,
          188.4
        ],
        [
          358,
          186.4
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          558,
          268.3
        ],
        [
          601.5,
          288.1
        ]
      ]
    },
    {
      "name": "Jalan Kesatrian X",
      "type": "residential",
      "width": 10,
      "points": [
        [
          371.5,
          169.7
        ],
        [
          372,
          164.2
        ],
        [
          374,
          158.3
        ],
        [
          377.7,
          153.6
        ],
        [
          382.3,
          151.5
        ],
        [
          386.3,
          151.9
        ],
        [
          392.1,
          155.1
        ],
        [
          398,
          157.1
        ],
        [
          407.9,
          157.3
        ],
        [
          415,
          156.2
        ],
        [
          417.7,
          156.5
        ],
        [
          421.2,
          159.1
        ],
        [
          421.6,
          161.9
        ]
      ]
    },
    {
      "name": "Jalan Tambak",
      "type": "primary",
      "width": 18,
      "points": [
        [
          364,
          177.2
        ],
        [
          364.7,
          181.4
        ]
      ]
    },
    {
      "name": "Jalan Tambak",
      "type": "primary",
      "width": 18,
      "points": [
        [
          364.8,
          183.2
        ],
        [
          363.8,
          185.9
        ]
      ]
    },
    {
      "name": "Jalan Tambak",
      "type": "primary",
      "width": 18,
      "points": [
        [
          346.5,
          195.3
        ],
        [
          350.5,
          193.7
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          786.5,
          -408.8
        ],
        [
          807,
          -440.9
        ]
      ]
    },
    {
      "name": "Jalan Bukit Duri Selatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          425,
          335.5
        ],
        [
          422,
          346.3
        ],
        [
          421.7,
          355.2
        ],
        [
          423.8,
          363.5
        ],
        [
          429.1,
          366.9
        ],
        [
          456.4,
          372.1
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          459.8,
          86.5
        ],
        [
          476.5,
          103.5
        ],
        [
          481.1,
          111.1
        ],
        [
          514.8,
          197.8
        ]
      ]
    },
    {
      "name": "Jalan Tabah I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          855.1,
          -468.9
        ],
        [
          911.2,
          -434.4
        ]
      ]
    },
    {
      "name": "Jalan Pulau Panjang",
      "type": "residential",
      "width": 10,
      "points": [
        [
          923.2,
          -506.1
        ],
        [
          896.9,
          -522.1
        ]
      ]
    },
    {
      "name": "Jalan Gudang Peluru Utara I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          543.8,
          447.2
        ],
        [
          514,
          452.5
        ]
      ]
    },
    {
      "name": "Jalan Tebet Timur Dalam XI",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          499.1,
          554.5
        ],
        [
          499.3,
          560
        ]
      ]
    },
    {
      "name": "Jalan Tebet Timur Dalam XI",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          497.9,
          510.4
        ],
        [
          499.1,
          554.5
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          747.4,
          507.4
        ],
        [
          740.7,
          480.2
        ]
      ]
    },
    {
      "name": "Jalan F",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          482.5,
          -418.1
        ],
        [
          497.3,
          -440.1
        ]
      ]
    },
    {
      "name": "Jalan Utan Panjang V",
      "type": "residential",
      "width": 10,
      "points": [
        [
          417.3,
          -428.1
        ],
        [
          449.3,
          -403.8
        ],
        [
          451.9,
          -403.1
        ],
        [
          458.2,
          -399.1
        ]
      ]
    },
    {
      "name": "Jalan Bendungan Jago",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          439.8,
          -503.5
        ],
        [
          448.5,
          -497.1
        ]
      ]
    },
    {
      "name": "Jalan Bukit Duri Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          425,
          335.5
        ],
        [
          447,
          311.8
        ]
      ]
    },
    {
      "name": "Jalan Mesjid 2",
      "type": "residential",
      "width": 10,
      "points": [
        [
          560.7,
          448.1
        ],
        [
          560.9,
          496.9
        ],
        [
          568.9,
          498.7
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          898.1,
          -586.9
        ],
        [
          915.2,
          -615
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          818.3,
          -452.6
        ],
        [
          789.6,
          -408.1
        ],
        [
          781.6,
          -391.8
        ],
        [
          776.2,
          -377.5
        ],
        [
          770.8,
          -358.9
        ],
        [
          754.6,
          -298
        ]
      ]
    },
    {
      "name": "Jalan Angkasa Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          337.9,
          -543.5
        ],
        [
          317,
          -538.4
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          845.3,
          -240.5
        ],
        [
          817.8,
          -249.5
        ],
        [
          788.6,
          -256.8
        ]
      ]
    },
    {
      "name": "Jalan Pacuan Kuda",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          914.1,
          -289.4
        ],
        [
          892.5,
          -250.2
        ],
        [
          884,
          -228.9
        ]
      ]
    },
    {
      "name": "Jalan Pacuankuda Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          871.5,
          -171.9
        ],
        [
          870.3,
          -173.1
        ],
        [
          870,
          -176.2
        ],
        [
          871.7,
          -191.3
        ],
        [
          875.5,
          -206
        ],
        [
          882,
          -225.8
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Residence",
      "type": "residential",
      "width": 10,
      "points": [
        [
          919.1,
          -292.1
        ],
        [
          912.8,
          -282
        ],
        [
          898.6,
          -255.3
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Barat XIX",
      "type": "residential",
      "width": 10,
      "points": [
        [
          619.6,
          -156.5
        ],
        [
          574,
          -211.9
        ],
        [
          578.6,
          -216.8
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Barat XVIII",
      "type": "residential",
      "width": 10,
      "points": [
        [
          632.6,
          -193.1
        ],
        [
          607.4,
          -172.6
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Barat XV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          598.7,
          -181.7
        ],
        [
          624.4,
          -203.4
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          324.9,
          -280.8
        ],
        [
          317,
          -279.7
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          707.5,
          -391.9
        ],
        [
          755.6,
          -406.4
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          413.8,
          -287
        ],
        [
          410.9,
          -286.8
        ]
      ]
    },
    {
      "name": "Jalan Rawa Tengah",
      "type": "residential",
      "width": 10,
      "points": [
        [
          477.6,
          -271.8
        ],
        [
          478.4,
          -267.5
        ],
        [
          481.5,
          -267.8
        ],
        [
          482.2,
          -267.2
        ],
        [
          482.2,
          -260
        ],
        [
          484.3,
          -238.1
        ]
      ]
    },
    {
      "name": "Jalan Teguh X",
      "type": "residential",
      "width": 10,
      "points": [
        [
          909.8,
          -435.2
        ],
        [
          916.5,
          -446
        ],
        [
          916.8,
          -450.5
        ],
        [
          928.3,
          -468.6
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          749.4,
          -264.2
        ],
        [
          744.2,
          -184.9
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          805.3,
          -429.2
        ],
        [
          793.1,
          -410.6
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          765.7,
          422.4
        ],
        [
          763.3,
          421.5
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          763.4,
          420.2
        ],
        [
          766.8,
          421.3
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          852.9,
          466.6
        ],
        [
          895.8,
          479.2
        ],
        [
          925.4,
          483.3
        ],
        [
          942.5,
          487
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          542.1,
          264.7
        ],
        [
          544.7,
          262.9
        ],
        [
          546.8,
          263.1
        ]
      ]
    },
    {
      "name": "Jalan Kebon Nanas",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          764.3,
          524.3
        ],
        [
          767.6,
          524.4
        ]
      ]
    },
    {
      "name": "Jalan Griya Wartawan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          804.7,
          526.2
        ],
        [
          808.6,
          527.2
        ],
        [
          814.1,
          531.1
        ],
        [
          825.3,
          534.8
        ],
        [
          847.1,
          545.2
        ]
      ]
    },
    {
      "name": "Jalan Tambak",
      "type": "primary",
      "width": 18,
      "points": [
        [
          360,
          188.2
        ],
        [
          363.3,
          184.9
        ],
        [
          363.9,
          181.8
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          357.8,
          184.8
        ],
        [
          355.8,
          182.2
        ]
      ]
    },
    {
      "name": "Jalan Tambak",
      "type": "primary",
      "width": 18,
      "points": [
        [
          363.9,
          181.8
        ],
        [
          362.8,
          176.8
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          398.7,
          93.8
        ],
        [
          394.1,
          96.3
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          542,
          -14.4
        ],
        [
          567.3,
          -26.8
        ],
        [
          581.5,
          -31.5
        ],
        [
          598,
          -34.9
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          499.8,
          16.6
        ],
        [
          495.1,
          19.8
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          410.7,
          81
        ],
        [
          428.8,
          65.4
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          393.4,
          94.4
        ],
        [
          397.5,
          92.1
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          390.2,
          98
        ],
        [
          377.5,
          106.2
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          494.5,
          18.9
        ],
        [
          499.2,
          15.7
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          481.2,
          30.2
        ],
        [
          469.6,
          38
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          468.3,
          35.8
        ],
        [
          483.5,
          26
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          589.8,
          -31.3
        ],
        [
          577.9,
          -28.3
        ],
        [
          560.6,
          -21.7
        ],
        [
          545.1,
          -13.5
        ],
        [
          527.4,
          -1.6
        ]
      ]
    },
    {
      "name": "Jalan BB",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          947.2,
          315.8
        ],
        [
          945.8,
          313.9
        ]
      ]
    },
    {
      "name": "Jalan BB",
      "type": "residential",
      "width": 10,
      "points": [
        [
          938.7,
          364.1
        ],
        [
          941.7,
          355.4
        ],
        [
          946.2,
          335.7
        ],
        [
          948.1,
          330.5
        ],
        [
          948.6,
          321.6
        ]
      ]
    },
    {
      "name": "Jalan Mulya Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          904.8,
          327.5
        ],
        [
          911.3,
          325
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          811.9,
          -440.5
        ],
        [
          803.1,
          -427.3
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          778.9,
          -391.1
        ],
        [
          782.1,
          -398.4
        ]
      ]
    },
    {
      "name": "Jalan Pembina Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          508.4,
          96.6
        ],
        [
          511.5,
          74.8
        ],
        [
          499.1,
          42.6
        ],
        [
          491.6,
          25.6
        ]
      ]
    },
    {
      "name": "Jalan Pembina I",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          524.2,
          95.3
        ],
        [
          518.3,
          73.8
        ],
        [
          507.9,
          41.5
        ],
        [
          505.5,
          35.3
        ],
        [
          497.5,
          20.4
        ]
      ]
    },
    {
      "name": "Jalan Kayu Manis Lama I",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          550.5,
          192.8
        ],
        [
          537.1,
          143
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          903.8,
          -600.8
        ],
        [
          911.2,
          -613.4
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          337.8,
          -282.9
        ],
        [
          317,
          -281
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          317,
          -282.3
        ],
        [
          336.4,
          -283.9
        ]
      ]
    },
    {
      "name": "Jalan Matraman I",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          445.5,
          95.9
        ],
        [
          441.6,
          101.2
        ],
        [
          440.1,
          102
        ],
        [
          420.6,
          96.5
        ],
        [
          417.7,
          96.3
        ],
        [
          402.1,
          104.6
        ],
        [
          399.5,
          99.6
        ]
      ]
    },
    {
      "name": "Jalan Convair",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          428.4,
          -581.1
        ],
        [
          431.5,
          -563.8
        ]
      ]
    },
    {
      "name": "Jalan I Gusti Ngurah Rai",
      "type": "primary",
      "width": 18,
      "points": [
        [
          960,
          262.4
        ],
        [
          942.4,
          265.9
        ],
        [
          912.7,
          274.3
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          554.3,
          265.7
        ],
        [
          561.7,
          267.8
        ],
        [
          607.3,
          288.9
        ]
      ]
    },
    {
      "name": "Jalan Kran Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          317,
          -534.2
        ],
        [
          325.4,
          -509.6
        ],
        [
          329.6,
          -491.1
        ],
        [
          328.9,
          -489.7
        ],
        [
          323.9,
          -488.8
        ],
        [
          323,
          -488
        ],
        [
          324.9,
          -476.2
        ]
      ]
    },
    {
      "name": "Jalan Industri Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          317,
          -591.8
        ],
        [
          330.4,
          -593.2
        ],
        [
          334.2,
          -592.8
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          336.4,
          -283.9
        ],
        [
          344.8,
          -285
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          494.5,
          -301.1
        ],
        [
          512.9,
          -305.5
        ],
        [
          522,
          -308.9
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          373.1,
          -287.3
        ],
        [
          398,
          -289.2
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          411.9,
          -289.1
        ],
        [
          440.3,
          -291.2
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          372.3,
          -286.2
        ],
        [
          411.9,
          -289.1
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Jaya Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          898.3,
          276.5
        ],
        [
          898.1,
          282.3
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          575.4,
          -556.4
        ],
        [
          630.8,
          -525.6
        ]
      ]
    },
    {
      "name": "Jalan Kemayoran Gempol",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          408.9,
          -455
        ],
        [
          368,
          -485.9
        ]
      ]
    },
    {
      "name": "Jalan Kemayoran Gempol",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          431.7,
          -461.2
        ],
        [
          452,
          -494.9
        ]
      ]
    },
    {
      "name": "Jalan Utan Panjang Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          423.1,
          -445.8
        ],
        [
          425.3,
          -443.9
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "primary",
      "width": 18,
      "points": [
        [
          405.5,
          -498.8
        ],
        [
          406.8,
          -496.1
        ],
        [
          406.4,
          -491.9
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          406.6,
          -458.3
        ],
        [
          408.2,
          -460.4
        ],
        [
          406.1,
          -472
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "primary",
      "width": 18,
      "points": [
        [
          409.6,
          -461.4
        ],
        [
          403.6,
          -491.6
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "primary",
      "width": 18,
      "points": [
        [
          412,
          -461.9
        ],
        [
          413.6,
          -453.7
        ],
        [
          415.3,
          -451.3
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          406.1,
          -472
        ],
        [
          402,
          -491.5
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "primary",
      "width": 18,
      "points": [
        [
          402.6,
          -498.3
        ],
        [
          396,
          -534.6
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "primary",
      "width": 18,
      "points": [
        [
          394.7,
          -556.6
        ],
        [
          396.1,
          -553.5
        ],
        [
          395.6,
          -550.1
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "primary",
      "width": 18,
      "points": [
        [
          391.1,
          -555.9
        ],
        [
          391.2,
          -559.3
        ],
        [
          383.3,
          -604.4
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          390.7,
          -586.5
        ],
        [
          393.8,
          -568.8
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Jaya II E",
      "type": "residential",
      "width": 10,
      "points": [
        [
          871.3,
          380.1
        ],
        [
          866.6,
          378.7
        ],
        [
          853.5,
          377.5
        ],
        [
          846.9,
          378.3
        ],
        [
          836.2,
          377.7
        ],
        [
          818.3,
          374
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Jaya AA",
      "type": "residential",
      "width": 10,
      "points": [
        [
          858.7,
          384.2
        ],
        [
          845,
          382.5
        ],
        [
          843.4,
          383.9
        ],
        [
          839.2,
          381.8
        ],
        [
          827.6,
          378.3
        ]
      ]
    },
    {
      "name": "Jalan Prumpung Tengah",
      "type": "residential",
      "width": 10,
      "points": [
        [
          772,
          343.8
        ],
        [
          768.5,
          349.3
        ],
        [
          769.8,
          368.7
        ],
        [
          771,
          370.7
        ],
        [
          777.6,
          370.8
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Timur VI",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          775.1,
          338.3
        ],
        [
          780.1,
          327.2
        ],
        [
          780.4,
          323.4
        ],
        [
          779.4,
          314.3
        ],
        [
          779.9,
          310.2
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Indah 2",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          954.1,
          499.2
        ],
        [
          954.7,
          490.5
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Indah 2",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          954.7,
          490.5
        ],
        [
          955,
          488.3
        ]
      ]
    },
    {
      "name": "Jalan Slamet Riyadi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          483.4,
          252.8
        ],
        [
          487.7,
          252
        ]
      ]
    },
    {
      "name": "Jalan Slamet Riyadi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          487.7,
          252
        ],
        [
          491.7,
          250.1
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Utara II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          457.1,
          239.5
        ],
        [
          473.3,
          245.1
        ],
        [
          478.1,
          248
        ],
        [
          482.1,
          251.6
        ]
      ]
    },
    {
      "name": "Jalan Kesatrian III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          467.3,
          186.4
        ],
        [
          467.6,
          193.6
        ],
        [
          466.9,
          197.1
        ],
        [
          460.8,
          208.5
        ],
        [
          458.6,
          208
        ],
        [
          457.5,
          208.6
        ],
        [
          451.3,
          204.6
        ]
      ]
    },
    {
      "name": "Jalan Kesatrian IV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          467.3,
          186.4
        ],
        [
          464.2,
          192.9
        ],
        [
          459.2,
          200.6
        ],
        [
          455.7,
          198.7
        ],
        [
          451.3,
          204.6
        ],
        [
          448.2,
          206.3
        ],
        [
          447.6,
          208
        ]
      ]
    },
    {
      "name": "Jalan Johar Baru Utara VI Gang 8",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          510,
          -182.7
        ],
        [
          496.3,
          -175.8
        ],
        [
          499,
          -169.4
        ],
        [
          502.4,
          -170.9
        ],
        [
          503.7,
          -165
        ]
      ]
    },
    {
      "name": "Jalan Menteng Tenggulun",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          317,
          181.6
        ],
        [
          327.1,
          184.5
        ],
        [
          331.6,
          184.8
        ],
        [
          338.4,
          184.7
        ],
        [
          349.7,
          182
        ]
      ]
    },
    {
      "name": "Jalan Slamet Riyadi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          499.4,
          238.4
        ],
        [
          497.4,
          245.8
        ],
        [
          494.9,
          248.9
        ]
      ]
    },
    {
      "name": "Jalan Pedati Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          670.5,
          452.2
        ],
        [
          729.2,
          449.3
        ]
      ]
    },
    {
      "name": "Jalan Matraman Dalam",
      "type": "residential",
      "width": 10,
      "points": [
        [
          458.7,
          122.7
        ],
        [
          456.4,
          113.2
        ],
        [
          454,
          110.2
        ],
        [
          450.1,
          107.4
        ],
        [
          445,
          107
        ],
        [
          428.7,
          103.5
        ],
        [
          419.1,
          100.3
        ],
        [
          417,
          100.8
        ],
        [
          409.2,
          105.9
        ],
        [
          408.4,
          108
        ]
      ]
    },
    {
      "name": "Jalan Rawa Selatan V",
      "type": "residential",
      "width": 10,
      "points": [
        [
          454.3,
          -235.7
        ],
        [
          454.4,
          -227.6
        ],
        [
          459,
          -226.3
        ],
        [
          462.5,
          -208.6
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          487.3,
          26.6
        ],
        [
          481.2,
          30.2
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          489.6,
          23.4
        ],
        [
          487.7,
          24.7
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          495.1,
          19.8
        ],
        [
          489.6,
          23.4
        ]
      ]
    },
    {
      "name": "Jalan Rawa Selatan II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          510.9,
          -223.5
        ],
        [
          508.3,
          -222.6
        ],
        [
          506,
          -223.5
        ],
        [
          489,
          -222.5
        ],
        [
          488.4,
          -226.5
        ],
        [
          482.5,
          -226.3
        ],
        [
          480.8,
          -227.8
        ],
        [
          464.3,
          -225.4
        ],
        [
          459.5,
          -223.8
        ]
      ]
    },
    {
      "name": "Jalan Utan Kayu",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          688.8,
          20.4
        ],
        [
          708.4,
          26.3
        ],
        [
          716.7,
          28
        ]
      ]
    },
    {
      "name": "Jalan Asem Gede Utara",
      "type": "residential",
      "width": 10,
      "points": [
        [
          648.4,
          97.7
        ],
        [
          671.9,
          92.7
        ],
        [
          676.4,
          93
        ],
        [
          683.1,
          98.2
        ]
      ]
    },
    {
      "name": "Jalan Panca Warga Tiga",
      "type": "residential",
      "width": 10,
      "points": [
        [
          853.5,
          556.2
        ],
        [
          848.7,
          557
        ],
        [
          840.5,
          555.6
        ],
        [
          829.6,
          556.5
        ],
        [
          828.7,
          556.2
        ],
        [
          827.2,
          553.1
        ],
        [
          808.9,
          553.6
        ]
      ]
    },
    {
      "name": "Jalan Pasangan Baru Tengah Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          609.9,
          196.3
        ],
        [
          611,
          200.5
        ]
      ]
    },
    {
      "name": "Jalan Percetakan Negara I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          405.1,
          -109.9
        ],
        [
          440.9,
          -61.8
        ],
        [
          445.7,
          -55.5
        ],
        [
          448.8,
          -52.9
        ],
        [
          457.5,
          -40.8
        ]
      ]
    },
    {
      "name": "Jalan Kawi-Kawi Bawah",
      "type": "residential",
      "width": 10,
      "points": [
        [
          412.8,
          -127.5
        ],
        [
          415.7,
          -121.1
        ],
        [
          418.5,
          -110
        ],
        [
          420,
          -107.1
        ],
        [
          432.2,
          -91.3
        ],
        [
          431.7,
          -85.4
        ],
        [
          426.9,
          -82.4
        ]
      ]
    },
    {
      "name": "Jalan Sungai Ciliwung",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          598.9,
          417.2
        ],
        [
          600.7,
          408.1
        ],
        [
          599.8,
          405.1
        ],
        [
          595.6,
          398.8
        ],
        [
          574.5,
          372.8
        ],
        [
          570.6,
          365
        ],
        [
          567.5,
          354.9
        ],
        [
          564.3,
          351.5
        ],
        [
          560.9,
          350
        ],
        [
          553.1,
          349.2
        ],
        [
          548.8,
          350.2
        ],
        [
          544.7,
          352.9
        ],
        [
          540.3,
          359.3
        ],
        [
          540.3,
          361.6
        ],
        [
          544.1,
          367.5
        ],
        [
          544.5,
          369.4
        ],
        [
          544.3,
          373
        ],
        [
          542.5,
          375.3
        ],
        [
          539.9,
          376.3
        ],
        [
          534.5,
          376.7
        ],
        [
          527,
          374.9
        ],
        [
          525.5,
          372.3
        ],
        [
          525.9,
          370.2
        ],
        [
          531.6,
          362.7
        ],
        [
          535.8,
          352.2
        ],
        [
          551.1,
          331.1
        ],
        [
          553.7,
          324.9
        ],
        [
          564.2,
          315.8
        ],
        [
          569.9,
          312
        ],
        [
          572.9,
          307.4
        ]
      ]
    },
    {
      "name": "Jalan Slamet Riyadi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          502.3,
          232.2
        ],
        [
          517.4,
          226.1
        ]
      ]
    },
    {
      "name": "Jalan Johar Baru IV A",
      "type": "residential",
      "width": 10,
      "points": [
        [
          464.8,
          -131
        ],
        [
          497.5,
          -138.5
        ],
        [
          510.5,
          -139.6
        ],
        [
          536.7,
          -139.3
        ],
        [
          554.5,
          -141.8
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          488.1,
          23
        ],
        [
          494.5,
          18.9
        ]
      ]
    },
    {
      "name": "Jalan Tebet Timur Dalam III M",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          497.9,
          510.4
        ],
        [
          497.6,
          486.5
        ]
      ]
    },
    {
      "name": "Jalan Tebet Timur Dalam III M",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          497.8,
          453.5
        ],
        [
          497.6,
          486.5
        ]
      ]
    },
    {
      "name": "Jalan Pramuka Sari I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          666.8,
          -78.8
        ],
        [
          666.5,
          -84.3
        ],
        [
          660.5,
          -120.5
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          576.6,
          428.3
        ],
        [
          570.6,
          427.9
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          569.3,
          425.6
        ],
        [
          576.6,
          425.2
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          559.6,
          426.5
        ],
        [
          569.3,
          425.6
        ]
      ]
    },
    {
      "name": "Jalan Pramuka Jaya Sari",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          478.4,
          -12
        ],
        [
          473.2,
          -19.8
        ]
      ]
    },
    {
      "name": "Jalan Perhubungan Udara Rawasari Blok A Dan Blok D",
      "type": "residential",
      "width": 10,
      "points": [
        [
          700.2,
          -56.1
        ],
        [
          705.6,
          -60.5
        ],
        [
          684,
          -87.1
        ],
        [
          679.5,
          -88.2
        ],
        [
          674.6,
          -86.7
        ]
      ]
    },
    {
      "name": "Jalan Perhubungan Udara Rawasari Blok A Dan Blok D",
      "type": "residential",
      "width": 10,
      "points": [
        [
          674.6,
          -86.7
        ],
        [
          670.7,
          -83.8
        ],
        [
          670.5,
          -81.9
        ],
        [
          682.6,
          -66.3
        ],
        [
          685.7,
          -63.4
        ],
        [
          690.5,
          -67.5
        ]
      ]
    },
    {
      "name": "Jalan Perhubungan Udara Rawasari Blok B",
      "type": "residential",
      "width": 10,
      "points": [
        [
          665.6,
          -113.4
        ],
        [
          669.6,
          -112.8
        ],
        [
          674.5,
          -113.6
        ],
        [
          692.3,
          -111.2
        ],
        [
          693.3,
          -112.2
        ],
        [
          693.5,
          -115.3
        ]
      ]
    },
    {
      "name": "Jalan Perintis Kemerdekaan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          932.3,
          -322.9
        ],
        [
          893.1,
          -346.8
        ]
      ]
    },
    {
      "name": "Jalan Masjid",
      "type": "residential",
      "width": 10,
      "points": [
        [
          626.8,
          538.9
        ],
        [
          657.8,
          539.6
        ]
      ]
    },
    {
      "name": "Jalan Haji Hasbi",
      "type": "residential",
      "width": 10,
      "points": [
        [
          625.8,
          529.5
        ],
        [
          657.1,
          527.5
        ]
      ]
    },
    {
      "name": "Jalan Tebet Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          410.7,
          499
        ],
        [
          402.4,
          499.9
        ],
        [
          392.9,
          498.7
        ],
        [
          370.3,
          490.8
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          408.4,
          414.6
        ],
        [
          430.5,
          420.1
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          463,
          430.1
        ],
        [
          452,
          427.9
        ]
      ]
    },
    {
      "name": "Jalan Menteng Jaya",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          317,
          154.6
        ],
        [
          324,
          156.3
        ],
        [
          331,
          160
        ],
        [
          344.4,
          175.6
        ]
      ]
    },
    {
      "name": "Jalan Ciliwung",
      "type": "residential",
      "width": 10,
      "points": [
        [
          577.4,
          513.9
        ],
        [
          575.6,
          513.5
        ],
        [
          573.5,
          511.2
        ],
        [
          572.7,
          506.1
        ],
        [
          577.6,
          497.1
        ],
        [
          584.7,
          491.8
        ],
        [
          591.8,
          482.2
        ],
        [
          591.8,
          461.5
        ]
      ]
    },
    {
      "name": "Jalan Galur Sari Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          648,
          119.3
        ],
        [
          645.8,
          98.1
        ],
        [
          650.3,
          61.1
        ],
        [
          650.1,
          57.6
        ],
        [
          648.2,
          52.5
        ]
      ]
    },
    {
      "name": "Jalan Galur Sari Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          650.9,
          53
        ],
        [
          652.4,
          57.7
        ],
        [
          652.5,
          60.8
        ],
        [
          648.3,
          100.3
        ],
        [
          651.1,
          120
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          539.2,
          253.8
        ],
        [
          543.2,
          259.5
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          536.8,
          255
        ],
        [
          531.8,
          245.1
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Utara I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          480.2,
          255.8
        ],
        [
          453.7,
          267.3
        ],
        [
          438.6,
          270
        ],
        [
          430.1,
          267.1
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          663.2,
          -38.8
        ],
        [
          660.8,
          -38.5
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          734.6,
          -35.6
        ],
        [
          732.3,
          -35.8
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          663.4,
          -39.7
        ],
        [
          661,
          -39.5
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          727.4,
          -36.6
        ],
        [
          705.7,
          -40.3
        ],
        [
          689.7,
          -41.6
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          680.1,
          -43.4
        ],
        [
          703.1,
          -42.8
        ],
        [
          726.7,
          -39.8
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          661.5,
          -41.6
        ],
        [
          663.8,
          -41.8
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          663.8,
          -42.7
        ],
        [
          688.1,
          -44.7
        ],
        [
          702,
          -43.9
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          661.6,
          -42.5
        ],
        [
          663.8,
          -42.7
        ]
      ]
    },
    {
      "name": "Jalan Percetakan Negara",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          662.4,
          -127.7
        ],
        [
          661.6,
          -124.6
        ]
      ]
    },
    {
      "name": "Jalan Percetakan Negara",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          664.6,
          -131.8
        ],
        [
          662.9,
          -129.6
        ]
      ]
    },
    {
      "name": "Jalan Pramuka Sari",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          658.7,
          -113.6
        ],
        [
          661.7,
          -113.5
        ]
      ]
    },
    {
      "name": "Jalan Rawa Sawah II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          444.6,
          -243.4
        ],
        [
          434.7,
          -243.3
        ],
        [
          420.4,
          -239.4
        ],
        [
          407.2,
          -239.6
        ]
      ]
    },
    {
      "name": "Jalan Galur Jaya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          441.5,
          -289.2
        ],
        [
          445.4,
          -249.6
        ]
      ]
    },
    {
      "name": "Jalan Rawa Selatan III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          517.4,
          -203.3
        ],
        [
          504,
          -203.6
        ],
        [
          481.4,
          -202.2
        ]
      ]
    },
    {
      "name": "Jalan Intan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          443.5,
          -263.4
        ],
        [
          430,
          -263.1
        ],
        [
          424.6,
          -260.5
        ],
        [
          423.9,
          -261.7
        ],
        [
          414.2,
          -261.7
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          667.3,
          332.8
        ],
        [
          639.1,
          334.1
        ]
      ]
    },
    {
      "name": "Jalan Tegalan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          524.2,
          95.3
        ],
        [
          507.6,
          96.6
        ]
      ]
    },
    {
      "name": "Jalan Palmeriam Utara",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          524.2,
          95.3
        ],
        [
          537.1,
          143
        ]
      ]
    },
    {
      "name": "Jalan Salemba Utan Barat",
      "type": "residential",
      "width": 10,
      "points": [
        [
          507.7,
          96.6
        ],
        [
          508.4,
          100.8
        ],
        [
          517.3,
          119.5
        ],
        [
          522.9,
          135.3
        ],
        [
          525.3,
          144.5
        ]
      ]
    },
    {
      "name": "Jalan Kampung Irian 28",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          544.4,
          -530.5
        ],
        [
          534.8,
          -512.8
        ],
        [
          530.2,
          -502.9
        ],
        [
          528,
          -496
        ]
      ]
    },
    {
      "name": "Jalan Pramuka Sari I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          661.1,
          -42.5
        ],
        [
          664.9,
          -56
        ],
        [
          666.8,
          -78.8
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Baru Utara",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          609.9,
          196.3
        ],
        [
          617.8,
          194
        ],
        [
          624.6,
          193.2
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Barat XXV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          648.4,
          -170.8
        ],
        [
          637.4,
          -166.9
        ],
        [
          626.5,
          -161.2
        ],
        [
          619.6,
          -156.5
        ]
      ]
    },
    {
      "name": "Jalan Jati Rawasari",
      "type": "residential",
      "width": 10,
      "points": [
        [
          552.2,
          -157.1
        ],
        [
          574.5,
          -158.9
        ],
        [
          582.7,
          -161
        ]
      ]
    },
    {
      "name": "Jalan Johar Baru Utara VI Gang A",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          511.1,
          -176
        ],
        [
          529.8,
          -179.8
        ],
        [
          540.9,
          -185.1
        ],
        [
          541.3,
          -187
        ],
        [
          545.5,
          -188.5
        ]
      ]
    },
    {
      "name": "Jalan KH. Ahmad Dahlan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          534.6,
          195
        ],
        [
          550.5,
          192.8
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          666.7,
          423
        ],
        [
          664,
          423.2
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          674.8,
          421.4
        ],
        [
          666.7,
          423
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          664,
          422
        ],
        [
          655,
          422.5
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          666.8,
          421.9
        ],
        [
          664,
          422
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          662,
          421
        ],
        [
          667.7,
          420.7
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          655.1,
          421.3
        ],
        [
          662,
          421
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur IV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          654,
          376
        ],
        [
          671,
          374.8
        ],
        [
          671.3,
          381.8
        ],
        [
          656.4,
          383.3
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          637.5,
          334.7
        ],
        [
          628.5,
          338.1
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          618.5,
          294.8
        ],
        [
          613.2,
          293.6
        ],
        [
          611.6,
          295.7
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          621.1,
          294.7
        ],
        [
          618.5,
          294.8
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          617.8,
          293
        ],
        [
          620,
          293.1
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          607.3,
          288.9
        ],
        [
          617.8,
          293
        ]
      ]
    },
    {
      "name": "Jalan Otto Iskandar Dinata III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          657,
          521.3
        ],
        [
          625.2,
          523.7
        ]
      ]
    },
    {
      "name": "Jalan Tambak",
      "type": "primary",
      "width": 18,
      "points": [
        [
          355.6,
          191
        ],
        [
          360,
          188.2
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Diponegoro",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          323.1,
          60
        ],
        [
          335.2,
          49.4
        ],
        [
          357.9,
          26
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Diponegoro",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          317.2,
          63.5
        ],
        [
          321.1,
          60.9
        ]
      ]
    },
    {
      "name": "Jalan Tebet Dalam I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          345.5,
          415.6
        ],
        [
          369.6,
          414.7
        ]
      ]
    },
    {
      "name": "Jalan Persada Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          338.5,
          481
        ],
        [
          340.6,
          481.3
        ]
      ]
    },
    {
      "name": "Jalan Profesor Doktor Satrio",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          344,
          409.7
        ],
        [
          342.5,
          408
        ]
      ]
    },
    {
      "name": "Jalan Profesor Doktor Satrio",
      "type": "primary",
      "width": 18,
      "points": [
        [
          355,
          406.4
        ],
        [
          334.2,
          406.1
        ],
        [
          323.8,
          407.9
        ]
      ]
    },
    {
      "name": "Jalan Persada Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          317.5,
          473.2
        ],
        [
          318.5,
          478.7
        ]
      ]
    },
    {
      "name": "Jalan Persada Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          318.5,
          478.7
        ],
        [
          338.5,
          481
        ]
      ]
    },
    {
      "name": "Jalan Dokter Saharjo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          356.3,
          192.1
        ],
        [
          352.4,
          194.5
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Sawit Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          595.7,
          159.2
        ],
        [
          603.3,
          180.8
        ],
        [
          606.1,
          185.9
        ],
        [
          609.9,
          196.3
        ]
      ]
    },
    {
      "name": "Jalan Sengon VI",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          578.2,
          145.6
        ],
        [
          547.2,
          148.9
        ]
      ]
    },
    {
      "name": "Jalan Kayu Manis Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          515.3,
          57.8
        ],
        [
          526.6,
          94.4
        ],
        [
          545.6,
          165.5
        ]
      ]
    },
    {
      "name": "Jalan Kayu Manis IV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          526.6,
          94.4
        ],
        [
          534.2,
          90.4
        ],
        [
          567,
          85.8
        ]
      ]
    },
    {
      "name": "Gang Dadap 7",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          539.8,
          96.2
        ],
        [
          564.1,
          94.1
        ],
        [
          569.8,
          92.7
        ]
      ]
    },
    {
      "name": "Jalan Kapuk I",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          532.6,
          116.6
        ],
        [
          575.8,
          111.6
        ]
      ]
    },
    {
      "name": "Gang Jati 6",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          560.4,
          72.4
        ],
        [
          521.5,
          77.7
        ]
      ]
    },
    {
      "name": "Gang Lontar 4",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          505.4,
          29.1
        ],
        [
          540.2,
          21.2
        ]
      ]
    },
    {
      "name": "Jalan Asem Gede Timur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          683.1,
          98.2
        ],
        [
          681.2,
          110.3
        ],
        [
          678.9,
          113.8
        ],
        [
          680.1,
          122
        ],
        [
          679.6,
          127.6
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XXXIII",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          704.5,
          -263.2
        ],
        [
          710.2,
          -291.9
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XXXIII",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          710.2,
          -291.9
        ],
        [
          715.7,
          -324.3
        ]
      ]
    },
    {
      "name": "Jalan Komplek Patra",
      "type": "residential",
      "width": 10,
      "points": [
        [
          737.3,
          -201.3
        ],
        [
          735.7,
          -200.6
        ],
        [
          727.8,
          -201.9
        ],
        [
          728.9,
          -222.9
        ],
        [
          738.8,
          -222.6
        ]
      ]
    },
    {
      "name": "Jalan Nanas I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          690.4,
          47.6
        ],
        [
          687.2,
          53.1
        ],
        [
          680.5,
          86.9
        ]
      ]
    },
    {
      "name": "Jalan Kebon Nanas Utara",
      "type": "residential",
      "width": 10,
      "points": [
        [
          678.5,
          484.7
        ],
        [
          678.6,
          479.3
        ],
        [
          679.5,
          476.6
        ],
        [
          677.6,
          452
        ]
      ]
    },
    {
      "name": "Gang Hidayah",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          716.5,
          462.5
        ],
        [
          678.8,
          464.6
        ]
      ]
    },
    {
      "name": "Jalan Panti Asuhan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          716.1,
          449.6
        ],
        [
          718.5,
          504.5
        ],
        [
          717.8,
          517
        ],
        [
          716.6,
          517.9
        ]
      ]
    },
    {
      "name": "Jalan Otto Iskandar Dinata III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          743,
          523.5
        ],
        [
          722.6,
          524.1
        ],
        [
          718.2,
          518.5
        ],
        [
          713.7,
          517.6
        ],
        [
          658.1,
          521.3
        ]
      ]
    },
    {
      "name": "Jalan Pasangan Baru Tengah Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          611.2,
          201.4
        ],
        [
          618.5,
          229.5
        ]
      ]
    },
    {
      "name": "Jalan KH. Ahmad Dahlan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          514.8,
          197.8
        ],
        [
          532.8,
          195.3
        ]
      ]
    },
    {
      "name": "Jalan Tebet Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          369.3,
          490.5
        ],
        [
          344.8,
          482.2
        ]
      ]
    },
    {
      "name": "Jalan Tebet Barat IV",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          333.8,
          553.3
        ],
        [
          344.6,
          553.2
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          383.1,
          409.6
        ],
        [
          363.1,
          407.2
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          390.8,
          408.8
        ],
        [
          392.7,
          409.6
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          363.8,
          406
        ],
        [
          384.7,
          407.2
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          612.7,
          421.5
        ],
        [
          570.6,
          427.9
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          569.2,
          426.7
        ],
        [
          579.1,
          426
        ],
        [
          594.8,
          422.9
        ],
        [
          612.8,
          420.5
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XVII",
      "type": "residential",
      "width": 10,
      "points": [
        [
          702.5,
          -325.2
        ],
        [
          693.4,
          -296.6
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          595.9,
          -342.5
        ],
        [
          608.9,
          -348.6
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          494.1,
          -299.9
        ],
        [
          512.7,
          -304.1
        ],
        [
          525.4,
          -308.7
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          576.5,
          -329.1
        ],
        [
          524,
          -305.4
        ],
        [
          504,
          -299.3
        ],
        [
          497.2,
          -298.1
        ]
      ]
    },
    {
      "name": "Jalan Sumur Batu",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          675.6,
          -383.9
        ],
        [
          674.7,
          -385.7
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XXII",
      "type": "residential",
      "width": 10,
      "points": [
        [
          648.2,
          -212.5
        ],
        [
          672.6,
          -212
        ],
        [
          679.9,
          -211.1
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Warna I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          666.4,
          -218.4
        ],
        [
          665.3,
          -204.9
        ],
        [
          664.1,
          -204.2
        ],
        [
          658.7,
          -205
        ],
        [
          647.8,
          -209.2
        ],
        [
          648.2,
          -212.5
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          712,
          -291.6
        ],
        [
          707,
          -262.9
        ]
      ]
    },
    {
      "name": "Jalan Arjuna I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          698,
          206.2
        ],
        [
          714.2,
          209.9
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Baru Utara",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          674.5,
          199.2
        ],
        [
          698,
          206.2
        ]
      ]
    },
    {
      "name": "Gang Monas",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          810.7,
          314.2
        ],
        [
          795.5,
          311.5
        ],
        [
          784,
          311.2
        ],
        [
          779.9,
          310.2
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Utara V",
      "type": "residential",
      "width": 10,
      "points": [
        [
          433.9,
          268.6
        ],
        [
          435.1,
          260
        ],
        [
          434.9,
          250.9
        ],
        [
          436.9,
          241.9
        ],
        [
          442.8,
          232.7
        ]
      ]
    },
    {
      "name": "Jalan Bukit Duri Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          400.3,
          341.5
        ],
        [
          412.4,
          342.7
        ],
        [
          417.2,
          341.7
        ]
      ]
    },
    {
      "name": "Jalan Bukit Duri Utara",
      "type": "residential",
      "width": 10,
      "points": [
        [
          447,
          311.8
        ],
        [
          431.3,
          290.9
        ],
        [
          421.4,
          279.7
        ]
      ]
    },
    {
      "name": "Gang Prumpung Tengah IV",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          770.1,
          360.8
        ],
        [
          776.7,
          359.9
        ],
        [
          776.5,
          358.8
        ],
        [
          791,
          358.4
        ],
        [
          801.8,
          356.8
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Timur IV",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          756,
          343.8
        ],
        [
          772,
          343.8
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Timur IV",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          742.5,
          312.4
        ],
        [
          743.9,
          336.7
        ],
        [
          745.2,
          343
        ]
      ]
    },
    {
      "name": "Jalan Jaksa",
      "type": "residential",
      "width": 10,
      "points": [
        [
          786.5,
          258.5
        ],
        [
          779.1,
          257.3
        ],
        [
          779,
          255.5
        ],
        [
          770.5,
          253.2
        ],
        [
          745.8,
          255.4
        ]
      ]
    },
    {
      "name": "Jalan Kramat Asem Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          649.1,
          119.6
        ],
        [
          642.3,
          117.9
        ],
        [
          630.5,
          121.4
        ],
        [
          620.3,
          121.7
        ]
      ]
    },
    {
      "name": "Jalan Salemba I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          393.4,
          51.1
        ],
        [
          378.4,
          66.7
        ]
      ]
    },
    {
      "name": "Gang Jembatan Merah",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          630,
          189.9
        ],
        [
          635.6,
          182.7
        ],
        [
          645.7,
          177.3
        ],
        [
          648.5,
          174.9
        ],
        [
          650.1,
          169.3
        ]
      ]
    },
    {
      "name": "Jalan Cendana II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          587.3,
          139.5
        ],
        [
          596,
          137.7
        ],
        [
          622.1,
          135.2
        ]
      ]
    },
    {
      "name": "Pulomas Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          749.3,
          -268.6
        ],
        [
          751.1,
          -267.4
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          905.9,
          -221.6
        ],
        [
          886,
          -227
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          886.8,
          -228.2
        ],
        [
          906.1,
          -222.5
        ]
      ]
    },
    {
      "name": "Jalan Kodam Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          702.9,
          -395.5
        ],
        [
          704.1,
          -392.2
        ]
      ]
    },
    {
      "name": "Jalan Kodam Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          702.2,
          -397.4
        ],
        [
          702.9,
          -395.5
        ]
      ]
    },
    {
      "name": "Jalan Serdang Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          501,
          -468.8
        ],
        [
          520.1,
          -462.1
        ],
        [
          543.4,
          -451.2
        ],
        [
          560,
          -441.9
        ],
        [
          565.5,
          -436.9
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Mas Utara",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          805.9,
          -453.3
        ],
        [
          803,
          -452.6
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Mas Utara",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          817.5,
          -455.6
        ],
        [
          805.9,
          -453.3
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Utara",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          768.6,
          -342.4
        ],
        [
          771.8,
          -341.7
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          738.4,
          -256.7
        ],
        [
          706.6,
          -263
        ]
      ]
    },
    {
      "name": "Jalan Swadaya V",
      "type": "residential",
      "width": 10,
      "points": [
        [
          619.5,
          -361.2
        ],
        [
          593.9,
          -377.9
        ],
        [
          585.2,
          -382.3
        ]
      ]
    },
    {
      "name": "Jalan Tambak Lorong C",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          364.8,
          150.6
        ],
        [
          360.7,
          148.4
        ],
        [
          358.7,
          144.9
        ],
        [
          354,
          143.1
        ],
        [
          348.5,
          143.4
        ],
        [
          346.1,
          141.9
        ],
        [
          341.5,
          141.6
        ],
        [
          338.9,
          138.9
        ],
        [
          336.5,
          138.8
        ],
        [
          333.5,
          132.8
        ]
      ]
    },
    {
      "name": "Jalan Sawo Kecik",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          456.4,
          372.1
        ],
        [
          455.3,
          377.5
        ],
        [
          456.1,
          381.2
        ]
      ]
    },
    {
      "name": "Gang Ros Barat IV",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          416.7,
          371.3
        ],
        [
          416.6,
          351.1
        ],
        [
          418.7,
          342.7
        ],
        [
          418.5,
          340.8
        ]
      ]
    },
    {
      "name": "Gang Haji Rosyidi",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          520.8,
          371.2
        ],
        [
          520.3,
          375.5
        ],
        [
          521.4,
          377.4
        ],
        [
          527.7,
          382.6
        ],
        [
          536.4,
          385.5
        ],
        [
          545.3,
          386.4
        ]
      ]
    },
    {
      "name": "Jalan Bukit Duri Tanjakan Dalam VI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          509.3,
          334.8
        ],
        [
          497.8,
          336.1
        ],
        [
          491.1,
          335.6
        ],
        [
          478,
          332.2
        ],
        [
          468.5,
          328
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          836.9,
          462.1
        ],
        [
          851.8,
          466.2
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Jaya Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          903.5,
          319.9
        ],
        [
          904,
          323.2
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Jaya Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          898.1,
          282.3
        ],
        [
          899.6,
          297.5
        ],
        [
          903.5,
          319.9
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Timur IV",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          745.2,
          343
        ],
        [
          755.6,
          343.7
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Timur VI",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          780.2,
          309.1
        ],
        [
          787,
          283
        ]
      ]
    },
    {
      "name": "Jalan Murdai I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          592.8,
          -137.7
        ],
        [
          556.4,
          -131.5
        ]
      ]
    },
    {
      "name": "Jalan Kenari I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          317,
          -19.5
        ],
        [
          327.4,
          -27.4
        ],
        [
          336.3,
          -35.5
        ],
        [
          343.8,
          -40.9
        ],
        [
          346.4,
          -41.6
        ]
      ]
    },
    {
      "name": "Jalan Kramat Sentiong",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          403.7,
          -125.1
        ],
        [
          408.5,
          -128.5
        ],
        [
          414,
          -134
        ],
        [
          414.6,
          -153.6
        ]
      ]
    },
    {
      "name": "Jalan Kampung Melayu Besar II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          561.5,
          509.7
        ],
        [
          571.8,
          494.1
        ],
        [
          580.4,
          485.4
        ],
        [
          584.1,
          480.3
        ],
        [
          585.6,
          475.4
        ],
        [
          584.8,
          454.6
        ],
        [
          570.6,
          429.8
        ],
        [
          567.5,
          429.7
        ]
      ]
    },
    {
      "name": "Jalan Balai Rakyat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          644.8,
          41.2
        ],
        [
          638.2,
          21.2
        ],
        [
          636.3,
          10.3
        ],
        [
          637.3,
          3
        ],
        [
          641.5,
          -5.3
        ]
      ]
    },
    {
      "name": "Jalan Majalah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          909.6,
          533
        ],
        [
          925.3,
          544.4
        ]
      ]
    },
    {
      "name": "Gang H",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          584.4,
          39.3
        ],
        [
          614.9,
          42.5
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Muara I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          960,
          474.7
        ],
        [
          950.7,
          469.7
        ],
        [
          947.1,
          466.3
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Muara 1",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          854.9,
          454.1
        ],
        [
          845.8,
          453.4
        ],
        [
          838,
          456.2
        ],
        [
          829.1,
          455.2
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Elok I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          925.8,
          365.8
        ],
        [
          924.6,
          392.8
        ],
        [
          923.3,
          404.8
        ]
      ]
    },
    {
      "name": "Jalan Komplek Cipinang Elok II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          891.8,
          394.2
        ],
        [
          878.5,
          425.3
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Besar",
      "type": "residential",
      "width": 10,
      "points": [
        [
          760.1,
          440.1
        ],
        [
          764.2,
          447
        ],
        [
          767.3,
          455.1
        ],
        [
          769.2,
          457.9
        ],
        [
          777,
          465.2
        ]
      ]
    },
    {
      "name": "Gang Kali Baru Timur VII",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          326.7,
          -338.6
        ],
        [
          367.2,
          -339
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi",
      "type": "residential",
      "width": 10,
      "points": [
        [
          377.4,
          -46.9
        ],
        [
          381,
          -41.1
        ],
        [
          384.9,
          -38
        ],
        [
          387.9,
          -32.6
        ],
        [
          394.2,
          -28.8
        ],
        [
          397.5,
          -22.2
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          446.7,
          8.7
        ],
        [
          461.5,
          12.8
        ],
        [
          476.4,
          18.1
        ],
        [
          482.5,
          21.1
        ],
        [
          485.3,
          23.5
        ]
      ]
    },
    {
      "name": "Jalan Tanah Tinggi Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          411.9,
          -308.6
        ],
        [
          410.9,
          -290.6
        ]
      ]
    },
    {
      "name": "Pulomas Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          786.6,
          -257.2
        ],
        [
          753,
          -264.8
        ]
      ]
    },
    {
      "name": "Pulomas Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          788.6,
          -256.8
        ],
        [
          786.6,
          -257.2
        ]
      ]
    },
    {
      "name": "Pulomas Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          753.1,
          -266.3
        ],
        [
          786.8,
          -258.4
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Utara",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          807.3,
          -334.1
        ],
        [
          813,
          -332.7
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Utara",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          772.2,
          -341.6
        ],
        [
          807.3,
          -334.1
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          590.6,
          -334.5
        ],
        [
          541.9,
          -311.2
        ],
        [
          516.7,
          -302
        ],
        [
          497.4,
          -297.3
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          769.8,
          -404.6
        ],
        [
          760.5,
          -404.5
        ],
        [
          750.3,
          -402.6
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          762.6,
          -403.3
        ],
        [
          756.3,
          -403
        ],
        [
          748,
          -400.8
        ],
        [
          698,
          -384.8
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XXXIII",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          718.1,
          -358.1
        ],
        [
          712.3,
          -372.7
        ]
      ]
    },
    {
      "name": "Jalan Rawasari Barat I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          657.1,
          -158.2
        ],
        [
          659.8,
          -151.7
        ],
        [
          661.3,
          -145.4
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          614.5,
          -219.1
        ],
        [
          626,
          -205.7
        ]
      ]
    },
    {
      "name": "Jalan Rawasari Selatan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          665.8,
          -132.3
        ],
        [
          687.7,
          -132.1
        ]
      ]
    },
    {
      "name": "Jalan Kayu Manis Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          595.7,
          159.2
        ],
        [
          587.3,
          139.5
        ]
      ]
    },
    {
      "name": "Jalan Griya Wartawan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          849.1,
          546
        ],
        [
          854.8,
          548.4
        ],
        [
          871.5,
          550.8
        ]
      ]
    },
    {
      "name": "Jalan Griya Wartawan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          847.1,
          545.2
        ],
        [
          849.1,
          546
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          851.3,
          467.3
        ],
        [
          836.8,
          464.2
        ],
        [
          829.9,
          460.1
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          950.2,
          487
        ],
        [
          960,
          487.5
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          942.5,
          487
        ],
        [
          950.2,
          487
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          960,
          488.6
        ],
        [
          950.4,
          488.3
        ]
      ]
    },
    {
      "name": "Jalan Gang B5",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          812.9,
          216.9
        ],
        [
          810.9,
          216.5
        ],
        [
          810.9,
          214.2
        ],
        [
          802.1,
          214
        ],
        [
          784.9,
          212.1
        ]
      ]
    },
    {
      "name": "Jalan Mugeni I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          784.8,
          208.7
        ],
        [
          764.5,
          209.7
        ],
        [
          747.7,
          214.4
        ],
        [
          745.1,
          216
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Lama Barat",
      "type": "residential",
      "width": 10,
      "points": [
        [
          724.9,
          231.5
        ],
        [
          726.7,
          275.8
        ],
        [
          729.4,
          279.9
        ]
      ]
    },
    {
      "name": "Gang Tembok",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          808.6,
          148.3
        ],
        [
          804.7,
          110.9
        ]
      ]
    },
    {
      "name": "Jalan Moh. Saleh 1",
      "type": "residential",
      "width": 10,
      "points": [
        [
          344.3,
          -141.4
        ],
        [
          348.6,
          -142.9
        ],
        [
          355.2,
          -143.7
        ],
        [
          368.3,
          -143.6
        ],
        [
          377.4,
          -142.5
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Baru I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          954.9,
          148.2
        ],
        [
          954.6,
          141.6
        ],
        [
          955.8,
          136.3
        ],
        [
          956.3,
          112.3
        ]
      ]
    },
    {
      "name": "Jalan Albezia Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          885.4,
          194.7
        ],
        [
          906.3,
          222.7
        ]
      ]
    },
    {
      "name": "Jalan Achmad Yani I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          759.9,
          108.1
        ],
        [
          759.7,
          115.6
        ],
        [
          744.8,
          115.8
        ],
        [
          744,
          121
        ],
        [
          714.7,
          120.7
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Timur VI Gang 14",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          396.8,
          -375
        ],
        [
          376.7,
          -378.6
        ],
        [
          369.7,
          -385.2
        ]
      ]
    },
    {
      "name": "Jalan D",
      "type": "residential",
      "width": 10,
      "points": [
        [
          450.7,
          -450.8
        ],
        [
          444.7,
          -452.6
        ],
        [
          444.7,
          -453.9
        ],
        [
          465,
          -486.2
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          508.7,
          430.5
        ],
        [
          519.6,
          430.1
        ],
        [
          534.6,
          428.3
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          494.5,
          437.2
        ],
        [
          488.4,
          435.8
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          488.4,
          435.8
        ],
        [
          482.5,
          434.8
        ]
      ]
    },
    {
      "name": "Jalan Kemayoran Gempol",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          440.3,
          -467.8
        ],
        [
          425.5,
          -443.2
        ]
      ]
    },
    {
      "name": "Jalan Utan Panjang Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          425.5,
          -443.2
        ],
        [
          418.4,
          -431.5
        ],
        [
          417.3,
          -428.1
        ],
        [
          414.6,
          -367
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Baru Tengah Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          652.7,
          233.4
        ],
        [
          665.5,
          233.3
        ],
        [
          670.2,
          232
        ],
        [
          691.9,
          230.2
        ],
        [
          695.7,
          230
        ],
        [
          696.6,
          230.7
        ]
      ]
    },
    {
      "name": "Jalan Rawamangun Muka Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          835.2,
          53.4
        ],
        [
          833.9,
          40.7
        ],
        [
          828.5,
          25.5
        ]
      ]
    },
    {
      "name": "Jalan Pinang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          913.3,
          43.8
        ],
        [
          889,
          42.7
        ]
      ]
    },
    {
      "name": "Jalan Waru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          889.7,
          23.5
        ],
        [
          953.8,
          23.7
        ]
      ]
    },
    {
      "name": "Jalan Apron",
      "type": "residential",
      "width": 10,
      "points": [
        [
          412.3,
          -557.3
        ],
        [
          422.8,
          -500.3
        ]
      ]
    },
    {
      "name": "Jalan Dakota I",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          480.5,
          -540.9
        ],
        [
          478.7,
          -543.2
        ],
        [
          474.9,
          -570.7
        ],
        [
          473.9,
          -585.3
        ]
      ]
    },
    {
      "name": "Jalan Puma Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          428.6,
          -558.8
        ],
        [
          397.2,
          -553.4
        ]
      ]
    },
    {
      "name": "Jalan Puma Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          396.9,
          -555.5
        ],
        [
          428.4,
          -561.2
        ]
      ]
    },
    {
      "name": "Jalan Kebon Kosong Gang 18",
      "type": "residential",
      "width": 10,
      "points": [
        [
          372.5,
          -435.9
        ],
        [
          387.2,
          -441.8
        ],
        [
          399.2,
          -444.8
        ],
        [
          404.9,
          -448
        ],
        [
          408.9,
          -455
        ]
      ]
    },
    {
      "name": "Jalan Kebon Kosong Gang 12",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          375.4,
          -426.3
        ],
        [
          391.6,
          -429.8
        ],
        [
          409.7,
          -436.7
        ],
        [
          417.1,
          -437.3
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          841.5,
          -494.2
        ],
        [
          846.6,
          -504.9
        ],
        [
          856.8,
          -522.2
        ],
        [
          877.6,
          -555.3
        ],
        [
          883.3,
          -565.6
        ],
        [
          885.8,
          -568.3
        ]
      ]
    },
    {
      "name": "Jalan Convair",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          427.3,
          -580.9
        ],
        [
          424.3,
          -599.9
        ]
      ]
    },
    {
      "name": "Jalan Dakota Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          428.4,
          -581.1
        ],
        [
          457,
          -585.7
        ],
        [
          470.6,
          -587.3
        ],
        [
          471.5,
          -586.8
        ]
      ]
    },
    {
      "name": "Jalan Dakota Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          463.5,
          -513.5
        ],
        [
          478.9,
          -538.9
        ]
      ]
    },
    {
      "name": "Jalan Kramat Sawah VII",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          441.7,
          -55.6
        ],
        [
          428.2,
          -62.7
        ],
        [
          417,
          -65.5
        ],
        [
          411,
          -66
        ]
      ]
    },
    {
      "name": "Jalan Kramat Sawah Baru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          453.2,
          -39.2
        ],
        [
          441.7,
          -55.6
        ]
      ]
    },
    {
      "name": "Jalan Kramat Sawah Baru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          441.7,
          -55.6
        ],
        [
          402.4,
          -108.5
        ]
      ]
    },
    {
      "name": "Jalan Salemba Bluntas Gang IV",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          405.6,
          -6.8
        ],
        [
          426.7,
          1.2
        ],
        [
          436,
          5.7
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          399,
          -20.4
        ],
        [
          407.3,
          -7.8
        ],
        [
          424.2,
          -1
        ]
      ]
    },
    {
      "name": "Jalan Haji Murtadho Gang XIII",
      "type": "residential",
      "width": 10,
      "points": [
        [
          435,
          37.5
        ],
        [
          464.8,
          16.6
        ]
      ]
    },
    {
      "name": "Jalan Salemba Bluntas",
      "type": "residential",
      "width": 10,
      "points": [
        [
          436.2,
          5.5
        ],
        [
          415.1,
          22
        ],
        [
          402.8,
          30.2
        ]
      ]
    },
    {
      "name": "Jalan Paseban Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          375.4,
          -46.4
        ],
        [
          366.1,
          -37.8
        ],
        [
          362,
          -35
        ]
      ]
    },
    {
      "name": "Jalan Balap Sepeda I A",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          934.9,
          -81.5
        ],
        [
          935.6,
          -74.3
        ],
        [
          940.2,
          -73.9
        ],
        [
          953.4,
          -65.9
        ],
        [
          958.3,
          -58.6
        ]
      ]
    },
    {
      "name": "Jalan Kemayoran Ketapang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          386.8,
          -472.2
        ],
        [
          364.6,
          -450.6
        ],
        [
          351.5,
          -433.3
        ]
      ]
    },
    {
      "name": "Jalan Kepu Selatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          361.3,
          -380.3
        ],
        [
          339.3,
          -378.9
        ],
        [
          318.9,
          -378.9
        ]
      ]
    },
    {
      "name": "Jalan Angkasa Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          337.8,
          -546.2
        ],
        [
          344.4,
          -547.6
        ]
      ]
    },
    {
      "name": "Jalan Angkasa Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          343.6,
          -544.8
        ],
        [
          340,
          -544
        ]
      ]
    },
    {
      "name": "Jalan Angkasa Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          337.9,
          -543.5
        ],
        [
          317,
          -539.4
        ]
      ]
    },
    {
      "name": "Jalan Mahoni",
      "type": "residential",
      "width": 10,
      "points": [
        [
          777.4,
          -162.2
        ],
        [
          796.9,
          -174.4
        ],
        [
          801.9,
          -175.7
        ],
        [
          812.1,
          -176.2
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Selatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          747.9,
          -184.8
        ],
        [
          743.9,
          -93.2
        ]
      ]
    },
    {
      "name": "Jalan Kayu Jati Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          861.9,
          -70.5
        ],
        [
          861.4,
          -73.5
        ]
      ]
    },
    {
      "name": "Jalan Balai Pustaka Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          886.3,
          100.8
        ],
        [
          886.3,
          98.6
        ]
      ]
    },
    {
      "name": "Jalan Krida 1",
      "type": "residential",
      "width": 10,
      "points": [
        [
          494.6,
          -520.4
        ],
        [
          499.5,
          -531.6
        ],
        [
          499.6,
          -534.1
        ],
        [
          501.1,
          -535.5
        ],
        [
          506.8,
          -547.5
        ]
      ]
    },
    {
      "name": "Jalan Serdang Baru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          568.7,
          -491
        ],
        [
          575.4,
          -490
        ],
        [
          590.8,
          -482.2
        ]
      ]
    },
    {
      "name": "Jalan Taruna Gang 1",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          498.4,
          -489.2
        ],
        [
          502.6,
          -490.1
        ],
        [
          517.9,
          -489.4
        ],
        [
          521.1,
          -499.3
        ]
      ]
    },
    {
      "name": "Jalan Serdang Baru I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          552.4,
          -494.9
        ],
        [
          558.1,
          -492.7
        ],
        [
          568.7,
          -491
        ]
      ]
    },
    {
      "name": "Jalan Delta Serdang",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          519.9,
          -564.5
        ],
        [
          552.6,
          -568.5
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          906.1,
          -222.5
        ],
        [
          906.2,
          -212.1
        ],
        [
          900.6,
          -180.9
        ],
        [
          900.5,
          -156.2
        ]
      ]
    },
    {
      "name": "Jalan Bangunan Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          816.6,
          -130.9
        ],
        [
          814.9,
          -117.1
        ],
        [
          815.1,
          -112.3
        ],
        [
          816.9,
          -101.9
        ],
        [
          820.6,
          -88.2
        ]
      ]
    },
    {
      "name": "Jalan Bangunan Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          819.4,
          -152.9
        ],
        [
          820.4,
          -153.5
        ],
        [
          826.8,
          -153.1
        ],
        [
          845.3,
          -151.1
        ]
      ]
    },
    {
      "name": "Jalan Tanah Mas I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          922.5,
          -82.2
        ],
        [
          922.6,
          -122.2
        ]
      ]
    },
    {
      "name": "Jalan Tanah Mas Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          923.2,
          -143.4
        ],
        [
          937.8,
          -142.1
        ],
        [
          960,
          -141.7
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Timur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          910.6,
          -289.7
        ],
        [
          895.7,
          -262
        ]
      ]
    },
    {
      "name": "Jalan Kampung Irian Gang 2",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          554.1,
          -525.3
        ],
        [
          571.1,
          -555.7
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          631.1,
          -522.1
        ],
        [
          618.6,
          -529.1
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          615.8,
          -530.6
        ],
        [
          612.5,
          -532.4
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          618.6,
          -529.1
        ],
        [
          615.8,
          -530.6
        ]
      ]
    },
    {
      "name": "Jalan Serdang Baru XIII Gang I",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          612.5,
          -532.4
        ],
        [
          596.4,
          -541.3
        ]
      ]
    },
    {
      "name": "Jalan Serdang Baru I",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          596.4,
          -541.3
        ],
        [
          582.1,
          -549.2
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          727.1,
          -465.5
        ],
        [
          688.6,
          -489.7
        ],
        [
          631.1,
          -522.1
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          900.5,
          -156.2
        ],
        [
          900.4,
          -153.8
        ]
      ]
    },
    {
      "name": "Jalan Waringin",
      "type": "residential",
      "width": 10,
      "points": [
        [
          777.4,
          -162.2
        ],
        [
          802.4,
          -157.5
        ],
        [
          818.8,
          -151.2
        ]
      ]
    },
    {
      "name": "Jalan Gading Raya I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          860.9,
          -380
        ],
        [
          887.3,
          -363
        ],
        [
          911.5,
          -349.2
        ]
      ]
    },
    {
      "name": "Jalan Pacuan Kuda",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          915.8,
          -292.3
        ],
        [
          914.1,
          -289.4
        ]
      ]
    },
    {
      "name": "Jalan Pacuan Kuda",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          933.7,
          -322.1
        ],
        [
          915.8,
          -292.3
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          914.5,
          -293.1
        ],
        [
          932.3,
          -322.9
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          912.6,
          -290
        ],
        [
          914.5,
          -293.1
        ]
      ]
    },
    {
      "name": "Jalan Bukit Gading Raya Boulevard",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          912.2,
          -348.6
        ],
        [
          910.1,
          -345.2
        ]
      ]
    },
    {
      "name": "Jalan Bukit Gading Raya Boulevard",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          910.1,
          -345.2
        ],
        [
          908,
          -341.9
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Mas Utara",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          797.5,
          -451.3
        ],
        [
          796.6,
          -450.5
        ],
        [
          770,
          -443.9
        ],
        [
          764.5,
          -442.9
        ],
        [
          758.9,
          -443.1
        ],
        [
          742,
          -455.7
        ],
        [
          728.9,
          -463.5
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Mas Utara",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          803,
          -452.6
        ],
        [
          797.5,
          -451.3
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          796.9,
          -423.7
        ],
        [
          811.1,
          -446.6
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          787,
          -401.6
        ],
        [
          779,
          -382.7
        ],
        [
          775.5,
          -368.6
        ]
      ]
    },
    {
      "name": "Jalan Tanah Tinggi Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          410.9,
          -290.6
        ],
        [
          410.9,
          -288.1
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          769.4,
          -407.2
        ],
        [
          776.3,
          -407.1
        ]
      ]
    },
    {
      "name": "Jalan Sumur Batu",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          677.3,
          -380.4
        ],
        [
          675.6,
          -383.9
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          704.1,
          -392.2
        ],
        [
          752.9,
          -407
        ],
        [
          761.7,
          -408.3
        ],
        [
          769.4,
          -407.2
        ]
      ]
    },
    {
      "name": "Jalan Bendungan Jago",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          454.7,
          -493.3
        ],
        [
          452.2,
          -494.8
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Timur V",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          368.4,
          -372.9
        ],
        [
          363.1,
          -378.8
        ]
      ]
    },
    {
      "name": "Jalan Sunter Bendungan Jago",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          552.6,
          -568.3
        ],
        [
          551.8,
          -566.4
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          524.9,
          -584.5
        ],
        [
          527.1,
          -583.3
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          522.5,
          -585.4
        ],
        [
          524.9,
          -584.5
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          405.8,
          -602.3
        ],
        [
          460.1,
          -611.3
        ]
      ]
    },
    {
      "name": "Jalan Utan Panjang Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          414.8,
          -432.5
        ],
        [
          421.1,
          -444.4
        ],
        [
          420.7,
          -446
        ]
      ]
    },
    {
      "name": "Jalan Bungur Besar VI",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          317,
          -330.6
        ],
        [
          321.6,
          -330.3
        ]
      ]
    },
    {
      "name": "Jalan Tabah Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          867,
          -489.6
        ],
        [
          844.9,
          -451.3
        ]
      ]
    },
    {
      "name": "Jalan Teluk",
      "type": "residential",
      "width": 10,
      "points": [
        [
          960,
          -449.6
        ],
        [
          930.4,
          -467.3
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "primary",
      "width": 18,
      "points": [
        [
          388.8,
          -588.4
        ],
        [
          393.2,
          -563.5
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          390.1,
          -602.4
        ],
        [
          394.1,
          -601.9
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          387.5,
          -604.5
        ],
        [
          389.6,
          -592.7
        ]
      ]
    },
    {
      "name": "Jalan Damar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          422.9,
          -608.8
        ],
        [
          421.9,
          -615
        ]
      ]
    },
    {
      "name": "Jalan RD Haji Keneng Mudatsir",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          524.1,
          -584.9
        ],
        [
          531.9,
          -598.9
        ],
        [
          535.8,
          -615
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          333.5,
          -591.6
        ],
        [
          335.7,
          -591.4
        ]
      ]
    },
    {
      "name": null,
      "type": "secondary",
      "width": 14,
      "points": [
        [
          347.3,
          -545.6
        ],
        [
          347.3,
          -545.6
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Indah 2",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          954.4,
          501.3
        ],
        [
          954.1,
          499.2
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Indah 2",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          955.6,
          490.6
        ],
        [
          955,
          499.4
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Indah 2",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          956,
          488.4
        ],
        [
          955.6,
          490.6
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Indah 2",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          955,
          499.4
        ],
        [
          954.4,
          501.3
        ]
      ]
    },
    {
      "name": "Jalan Bukit Gading Raya Boulevard",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          937.2,
          -384.2
        ],
        [
          930,
          -370.5
        ]
      ]
    },
    {
      "name": "Jalan Sunter Jaya 1",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          538.2,
          -607.4
        ],
        [
          540.1,
          -615
        ]
      ]
    },
    {
      "name": "Gang Lele",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          677.5,
          -586.2
        ],
        [
          647.8,
          -535.3
        ],
        [
          640.6,
          -520
        ]
      ]
    },
    {
      "name": "Jalan Danau Indah Tengah",
      "type": "residential",
      "width": 10,
      "points": [
        [
          805.7,
          -586.2
        ],
        [
          832.9,
          -591.5
        ],
        [
          835.7,
          -591.3
        ]
      ]
    },
    {
      "name": "Jalan Pucuk Beringin I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          644.8,
          -575
        ],
        [
          658,
          -577.7
        ],
        [
          671.5,
          -601.7
        ],
        [
          674.4,
          -608.8
        ]
      ]
    },
    {
      "name": "Jalan Pulo Besar II",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          888.5,
          -573.3
        ],
        [
          874.9,
          -577.6
        ],
        [
          872.5,
          -579.9
        ],
        [
          863.8,
          -581.6
        ],
        [
          862.5,
          -582.6
        ],
        [
          862.8,
          -584.9
        ]
      ]
    },
    {
      "name": "Jalan Pulo Besar",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          833.1,
          -562.5
        ],
        [
          829.2,
          -557
        ],
        [
          824.5,
          -552.3
        ],
        [
          822,
          -548.2
        ],
        [
          817.9,
          -544.8
        ],
        [
          809.9,
          -535.7
        ]
      ]
    },
    {
      "name": "Jalan Tunas Beringin",
      "type": "residential",
      "width": 10,
      "points": [
        [
          646,
          -568.1
        ],
        [
          639.7,
          -603.1
        ]
      ]
    },
    {
      "name": "Jalan M. Saari",
      "type": "residential",
      "width": 10,
      "points": [
        [
          744.9,
          -503.4
        ],
        [
          737.7,
          -488
        ],
        [
          727.2,
          -470.9
        ]
      ]
    },
    {
      "name": "Jalan Sunter Jaya IV A",
      "type": "residential",
      "width": 10,
      "points": [
        [
          624.1,
          -565
        ],
        [
          592.2,
          -559.4
        ]
      ]
    },
    {
      "name": "Jalan Haji Basar",
      "type": "residential",
      "width": 10,
      "points": [
        [
          745.3,
          -504.1
        ],
        [
          749.6,
          -513.2
        ],
        [
          752.9,
          -513
        ],
        [
          761.1,
          -508.2
        ],
        [
          762,
          -508.4
        ],
        [
          763.6,
          -512
        ],
        [
          769.9,
          -508.8
        ]
      ]
    },
    {
      "name": "Jalan Sunter Pratama 1",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          661.5,
          -546.2
        ],
        [
          677.4,
          -573
        ],
        [
          678.6,
          -573.5
        ]
      ]
    },
    {
      "name": "Jalan Sunter Indah Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          796.7,
          -585.7
        ],
        [
          748.1,
          -580.9
        ]
      ]
    },
    {
      "name": "Jalan Sunter Jaya 1",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          527.7,
          -583
        ],
        [
          532.9,
          -592.8
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          397.5,
          30.6
        ],
        [
          387.1,
          19.9
        ],
        [
          382.1,
          13.6
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          448.5,
          54.1
        ],
        [
          437.2,
          63.2
        ]
      ]
    },
    {
      "name": "Flyover Pramuka Salemba",
      "type": "primary",
      "width": 18,
      "points": [
        [
          469.6,
          38
        ],
        [
          464.7,
          39.6
        ],
        [
          457.5,
          44.6
        ]
      ]
    },
    {
      "name": "Jalan Profesor Doktor Satrio",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          317,
          408.8
        ],
        [
          325.3,
          404.8
        ],
        [
          336.2,
          402.6
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          719.9,
          -358.9
        ],
        [
          722.4,
          -351.7
        ],
        [
          722.1,
          -348.6
        ],
        [
          712,
          -291.6
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          714.1,
          -373.5
        ],
        [
          719.9,
          -358.9
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          712.1,
          -378.4
        ],
        [
          714.1,
          -373.5
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          772,
          -404.5
        ],
        [
          769.7,
          -403.6
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Barat 26",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          579.4,
          -285.5
        ],
        [
          581.4,
          -291.3
        ],
        [
          584.3,
          -295.3
        ],
        [
          587.9,
          -297.9
        ],
        [
          601.3,
          -304.4
        ],
        [
          603.3,
          -306
        ],
        [
          605.5,
          -309.6
        ],
        [
          605.6,
          -314.6
        ],
        [
          595.7,
          -336.9
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          583.3,
          -284
        ],
        [
          583.1,
          -265.8
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Mas Utama",
      "type": "residential",
      "width": 10,
      "points": [
        [
          760.8,
          -442.8
        ],
        [
          756.3,
          -438.1
        ],
        [
          748.5,
          -413
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          404,
          -513.5
        ],
        [
          406,
          -501.6
        ],
        [
          407,
          -499.7
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          390.3,
          -551.2
        ],
        [
          389.9,
          -554.2
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          389.9,
          -554.2
        ],
        [
          390.2,
          -556.5
        ]
      ]
    },
    {
      "name": "Jalan Angkasa Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          390.8,
          -550.2
        ],
        [
          370.1,
          -546.8
        ],
        [
          351.8,
          -545.6
        ]
      ]
    },
    {
      "name": "Jalan Tol Bekasi–Cawang–Kampung Melayu",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          747.7,
          486.6
        ],
        [
          753.9,
          514
        ],
        [
          761.5,
          537.6
        ],
        [
          767.2,
          560
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          460.1,
          -611.3
        ],
        [
          467.9,
          -612.6
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          453.7,
          -606.7
        ],
        [
          446.3,
          -606.7
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          476.2,
          -607.7
        ],
        [
          472.5,
          -607.9
        ],
        [
          464.1,
          -605.8
        ],
        [
          449.4,
          -605.4
        ]
      ]
    },
    {
      "name": "Jalan Damar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          424.3,
          -599.9
        ],
        [
          422.9,
          -608.8
        ]
      ]
    },
    {
      "name": "Jalan Damar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          423.8,
          -608.9
        ],
        [
          425.2,
          -600
        ]
      ]
    },
    {
      "name": "Jalan Casa",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          437,
          -502.9
        ],
        [
          439.8,
          -503.5
        ]
      ]
    },
    {
      "name": "Gang J",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          378.7,
          -277.2
        ],
        [
          378.7,
          -267.9
        ],
        [
          387.2,
          -267.3
        ],
        [
          406.5,
          -267.7
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Warna I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          658.7,
          -205
        ],
        [
          653.9,
          -190.4
        ],
        [
          653.7,
          -186.1
        ],
        [
          654.4,
          -184
        ],
        [
          659.4,
          -182.3
        ],
        [
          660.9,
          -178.7
        ]
      ]
    },
    {
      "name": "Jalan Percetakan Negara",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          442.7,
          -31.7
        ],
        [
          434.8,
          -29.1
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah VI",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          665.6,
          -351.6
        ],
        [
          673.9,
          -333.6
        ]
      ]
    },
    {
      "name": null,
      "type": "trunk",
      "width": 16,
      "points": [
        [
          744.9,
          -171.9
        ],
        [
          746.9,
          -171.9
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          437.2,
          63.2
        ],
        [
          434.3,
          65.7
        ]
      ]
    },
    {
      "name": "Jalan Talang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          377.7,
          67.5
        ],
        [
          375.8,
          69.8
        ]
      ]
    },
    {
      "name": "Jalan Pulau Dana",
      "type": "residential",
      "width": 10,
      "points": [
        [
          925.2,
          -544
        ],
        [
          926.8,
          -544
        ],
        [
          954.9,
          -527.3
        ]
      ]
    },
    {
      "name": "Jalan Balai Pustaka Baru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          890.4,
          -23
        ],
        [
          891,
          -20.1
        ]
      ]
    },
    {
      "name": "Jalan Balai Pustaka Baru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          889.3,
          -20.2
        ],
        [
          890.4,
          -23
        ]
      ]
    },
    {
      "name": "Jalan Basuki Rahmat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          734.2,
          429.5
        ],
        [
          744,
          477.8
        ],
        [
          744.3,
          482.5
        ]
      ]
    },
    {
      "name": "Jalan Basuki Rahmat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          730.7,
          407.6
        ],
        [
          732.1,
          413.3
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          728.1,
          428.5
        ],
        [
          726.8,
          419.4
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          723.7,
          380.3
        ],
        [
          721.6,
          342
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          355.4,
          405.4
        ],
        [
          363.8,
          406
        ]
      ]
    },
    {
      "name": "Jalan Profesor Doktor Satrio",
      "type": "primary",
      "width": 18,
      "points": [
        [
          323.7,
          407.1
        ],
        [
          327.8,
          406.1
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          363.1,
          407.2
        ],
        [
          355,
          406.4
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          359.1,
          174
        ],
        [
          361.8,
          168.6
        ]
      ]
    },
    {
      "name": "Jalan Slamet Riyadi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          494.9,
          248.9
        ],
        [
          492.1,
          250.8
        ]
      ]
    },
    {
      "name": "Jalan Slamet Riyadi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          501.4,
          234.7
        ],
        [
          499.4,
          238.4
        ]
      ]
    },
    {
      "name": "Jalan Slamet Riyadi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          499.4,
          238.4
        ],
        [
          499.1,
          234.5
        ]
      ]
    },
    {
      "name": "Jalan Bukit Duri Utara Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          562.3,
          297.9
        ],
        [
          562,
          295.4
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          434.3,
          65.7
        ],
        [
          429.5,
          61.3
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          429.5,
          61.3
        ],
        [
          415.4,
          48.3
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          919.3,
          -615
        ],
        [
          913.2,
          -604.9
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          732.9,
          -39.1
        ],
        [
          735.2,
          -38.8
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          734.3,
          -34.2
        ],
        [
          732.8,
          -26.3
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          729.5,
          -36.2
        ],
        [
          724.4,
          -36.3
        ],
        [
          698.7,
          -40.1
        ],
        [
          687.8,
          -40.6
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          731.2,
          -36
        ],
        [
          731.7,
          -39.3
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          694.1,
          288.3
        ],
        [
          679.7,
          289
        ],
        [
          666.6,
          291.6
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          366,
          -286.7
        ],
        [
          371.8,
          -286.2
        ]
      ]
    },
    {
      "name": "Jalan Tanah Tinggi Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          406.8,
          -287.8
        ],
        [
          406.7,
          -290.4
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          718.1,
          176.3
        ],
        [
          719.4,
          205.8
        ],
        [
          722.5,
          246.2
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          824.3,
          -459.9
        ],
        [
          811.9,
          -440.5
        ]
      ]
    },
    {
      "name": "Jalan Kramat Sawah Baru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          401.7,
          -109.4
        ],
        [
          400.7,
          -111.9
        ],
        [
          395.5,
          -118.7
        ]
      ]
    },
    {
      "name": "Jalan Rawamangun Muka Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          722.6,
          29.1
        ],
        [
          720.1,
          29
        ]
      ]
    },
    {
      "name": "Jalan Rawasari Selatan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          737.5,
          -96.9
        ],
        [
          740.1,
          -95.1
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          842.7,
          -495.8
        ],
        [
          854.8,
          -515.7
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          854.8,
          -515.7
        ],
        [
          885.8,
          -568.3
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          844.8,
          -494.1
        ],
        [
          833.4,
          -474.4
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          889.8,
          -566.9
        ],
        [
          844.8,
          -494.1
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Mas Barat",
      "type": "unclassified",
      "width": 10,
      "points": [
        [
          727.8,
          -461.3
        ],
        [
          710.3,
          -431.2
        ],
        [
          709.9,
          -426.3
        ],
        [
          716.2,
          -404.6
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          730.9,
          -467
        ],
        [
          742.8,
          -459.9
        ],
        [
          756.7,
          -449.6
        ],
        [
          760.9,
          -447.5
        ],
        [
          766.6,
          -447.8
        ],
        [
          820.4,
          -461.7
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Timur Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          933.6,
          242
        ],
        [
          931.7,
          241
        ]
      ]
    },
    {
      "name": "Jalan Haji Darip",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          927.2,
          253.5
        ],
        [
          915.3,
          271.1
        ],
        [
          911.8,
          273.9
        ],
        [
          906.9,
          275.2
        ],
        [
          886.5,
          276.4
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          781.9,
          -403.7
        ],
        [
          772,
          -404.5
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Lama Selatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          923.5,
          241.3
        ],
        [
          922.7,
          245.8
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Timur Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          927.4,
          239.6
        ],
        [
          923.8,
          240.3
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Lama Selatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          922.7,
          245.8
        ],
        [
          921.2,
          242.1
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Timur Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          927.4,
          239.6
        ],
        [
          931.7,
          241
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Timur Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          923.3,
          238.7
        ],
        [
          927.4,
          239.6
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          440.2,
          67.2
        ],
        [
          453.9,
          81.4
        ],
        [
          459.8,
          86.5
        ]
      ]
    },
    {
      "name": "Terowongan Matraman",
      "type": "primary",
      "width": 18,
      "points": [
        [
          443.3,
          53.2
        ],
        [
          459.1,
          41.4
        ]
      ]
    },
    {
      "name": "Terowongan Matraman",
      "type": "primary",
      "width": 18,
      "points": [
        [
          406.2,
          85.9
        ],
        [
          411.2,
          81.6
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          431.2,
          64.4
        ],
        [
          435.6,
          63.9
        ],
        [
          440.2,
          67.2
        ]
      ]
    },
    {
      "name": "Terowongan Matraman",
      "type": "primary",
      "width": 18,
      "points": [
        [
          422.3,
          72.1
        ],
        [
          443.3,
          53.2
        ]
      ]
    },
    {
      "name": "Jalan BB",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          948.6,
          321.6
        ],
        [
          947.2,
          315.8
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Utara II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          439.3,
          229.7
        ],
        [
          446.8,
          235.2
        ],
        [
          457.1,
          239.5
        ]
      ]
    },
    {
      "name": "Jalan Bujana Tirta 6",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          794.4,
          101.8
        ],
        [
          783,
          102.3
        ]
      ]
    },
    {
      "name": "Jalan Salemba I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          336.3,
          48.3
        ],
        [
          338.7,
          48.8
        ],
        [
          345.7,
          46.4
        ],
        [
          350,
          46
        ],
        [
          360.5,
          46.2
        ],
        [
          364.6,
          47.5
        ],
        [
          367.5,
          49.9
        ],
        [
          371.8,
          60.6
        ],
        [
          377.8,
          67.4
        ]
      ]
    },
    {
      "name": "Jalan Proklamasi",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          317,
          99.4
        ],
        [
          320.1,
          101.7
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Lama Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          786.9,
          271.5
        ],
        [
          809.2,
          264.8
        ]
      ]
    },
    {
      "name": "Jalan Profesor Doktor Satrio",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          342.5,
          408
        ],
        [
          336.8,
          407.3
        ]
      ]
    },
    {
      "name": "Jalan Profesor Doktor Satrio",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          336.2,
          402.6
        ],
        [
          341.7,
          401.5
        ]
      ]
    },
    {
      "name": "Jalan Kayu Jati V",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          890.9,
          -26.1
        ],
        [
          890.4,
          -23
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Baru Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          697.2,
          236.5
        ],
        [
          696.6,
          230.7
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          768.3,
          -360.2
        ],
        [
          771,
          -372.3
        ]
      ]
    },
    {
      "name": "Jalan Perintis Kemerdekaan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          798.4,
          -404
        ],
        [
          810.7,
          -399.9
        ],
        [
          819.5,
          -395.5
        ]
      ]
    },
    {
      "name": "Jalan Perintis Kemerdekaan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          823.2,
          -390.1
        ],
        [
          821.2,
          -391.2
        ]
      ]
    },
    {
      "name": "Jalan Perintis Kemerdekaan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          819.6,
          -392.2
        ],
        [
          809.5,
          -397.5
        ]
      ]
    },
    {
      "name": "Jalan Tener",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          901,
          -149.9
        ],
        [
          898,
          -152.6
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          744.6,
          -239.7
        ],
        [
          744.1,
          -241.9
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          742.6,
          -214
        ],
        [
          744.6,
          -239.7
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          738.3,
          -154.7
        ],
        [
          739.9,
          -158.9
        ],
        [
          742.6,
          -214
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          468.3,
          35.8
        ],
        [
          470.3,
          33.7
        ],
        [
          485.9,
          23.1
        ]
      ]
    },
    {
      "name": "Flyover Pramuka Salemba",
      "type": "primary",
      "width": 18,
      "points": [
        [
          411.8,
          42.7
        ],
        [
          397.5,
          30.6
        ]
      ]
    },
    {
      "name": "Flyover Pramuka Matraman",
      "type": "primary",
      "width": 18,
      "points": [
        [
          409.2,
          85.9
        ],
        [
          404.3,
          90.2
        ]
      ]
    },
    {
      "name": "Jalan Sunter Jaya 1",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          532.9,
          -592.8
        ],
        [
          535.3,
          -597.7
        ]
      ]
    },
    {
      "name": "Jalan Angkasa Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          317,
          -541.1
        ],
        [
          337.8,
          -546.2
        ]
      ]
    },
    {
      "name": "Jalan Angkasa",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          363.6,
          -492.1
        ],
        [
          366.2,
          -488.5
        ],
        [
          370.7,
          -488.3
        ]
      ]
    },
    {
      "name": "Jalan Kramat Sawah VII",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          379.5,
          -49
        ],
        [
          378.5,
          -54.2
        ],
        [
          386.9,
          -60
        ],
        [
          392,
          -62.6
        ],
        [
          398.6,
          -64.6
        ],
        [
          411,
          -66
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Barat II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          579.9,
          -285.4
        ],
        [
          582.2,
          -284.9
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          719.1,
          27.7
        ],
        [
          723.5,
          3.3
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          717.8,
          34.1
        ],
        [
          719,
          28.8
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          438,
          69.2
        ],
        [
          434.3,
          65.7
        ]
      ]
    },
    {
      "name": "Jalan Proklamasi",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          372.1,
          109
        ],
        [
          362.1,
          109.6
        ],
        [
          329.7,
          104.7
        ]
      ]
    },
    {
      "name": "Jalan Proklamasi",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          363.5,
          108.7
        ],
        [
          368.7,
          108.7
        ],
        [
          372.4,
          107.7
        ]
      ]
    },
    {
      "name": "Jalan Rawamangun Selatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          841.4,
          101.2
        ],
        [
          834,
          100.9
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          432.3,
          63.9
        ],
        [
          435.1,
          61.4
        ]
      ]
    },
    {
      "name": "Jalan Kramat Sentiong",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          399.3,
          -122
        ],
        [
          397.5,
          -120.3
        ]
      ]
    },
    {
      "name": "Jalan Kramat Sentiong",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          397.5,
          -120.3
        ],
        [
          392.6,
          -116.8
        ]
      ]
    },
    {
      "name": "Jalan Kramat Sentiong",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          392.6,
          -116.8
        ],
        [
          397,
          -120.7
        ]
      ]
    },
    {
      "name": "Jalan Kramat Sentiong",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          399.3,
          -122
        ],
        [
          402.3,
          -124
        ]
      ]
    },
    {
      "name": "Jalan Tanah Tinggi I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          317,
          -275.6
        ],
        [
          319.9,
          -271
        ],
        [
          326.9,
          -252
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Utara II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          425.7,
          217.4
        ],
        [
          436.5,
          227.2
        ]
      ]
    },
    {
      "name": "Jalan Tol Bekasi–Cawang–Kampung Melayu",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          737,
          471
        ],
        [
          724.3,
          425.1
        ],
        [
          722.8,
          416.3
        ],
        [
          722.1,
          407.1
        ],
        [
          723.4,
          387.7
        ],
        [
          722.7,
          349.7
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          346.5,
          195.3
        ],
        [
          355.3,
          188.4
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          333,
          -198.9
        ],
        [
          327.9,
          -209.6
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          725.3,
          15.5
        ],
        [
          724.5,
          19.6
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          487.1,
          22.2
        ],
        [
          527.2,
          -5.2
        ],
        [
          539.1,
          -12.5
        ]
      ]
    },
    {
      "name": "Jalan Rawamangun",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          522.8,
          -15.2
        ],
        [
          537.4,
          -11.9
        ]
      ]
    },
    {
      "name": "Jalan Rawa Sawah",
      "type": "residential",
      "width": 10,
      "points": [
        [
          413.3,
          -229.6
        ],
        [
          411.7,
          -199.9
        ],
        [
          412.1,
          -196.4
        ]
      ]
    },
    {
      "name": "Jalan Rawa Sawah III",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          413.3,
          -229.6
        ],
        [
          423.5,
          -229.3
        ],
        [
          423.9,
          -229.9
        ],
        [
          443.3,
          -226.3
        ]
      ]
    },
    {
      "name": "Jalan Sumur Batu Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          632.5,
          -524.3
        ],
        [
          631.4,
          -522.5
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Timur VI",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          414.1,
          -367
        ],
        [
          411.1,
          -367.1
        ]
      ]
    },
    {
      "name": "Jalan Timah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          409.4,
          -326.3
        ],
        [
          411.8,
          -326.2
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          579.8,
          -265.8
        ],
        [
          582.2,
          -265.8
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          410,
          -286.8
        ],
        [
          407.6,
          -286.6
        ]
      ]
    },
    {
      "name": "Jalan Angkasa",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          365.4,
          -487
        ],
        [
          363.6,
          -492.1
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          460.4,
          40.6
        ],
        [
          468.3,
          35.8
        ]
      ]
    },
    {
      "name": "Jalan Profesor Doktor Satrio",
      "type": "primary",
      "width": 18,
      "points": [
        [
          317,
          410.3
        ],
        [
          323.7,
          407.1
        ]
      ]
    },
    {
      "name": "Jalan Profesor Doktor Satrio",
      "type": "primary",
      "width": 18,
      "points": [
        [
          323.8,
          407.9
        ],
        [
          317,
          411.4
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          348,
          -58
        ],
        [
          357,
          -40.8
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          820.8,
          -460.5
        ],
        [
          822.6,
          -463.2
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          818.5,
          -457
        ],
        [
          820.8,
          -460.5
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur IV",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          656.4,
          383.3
        ],
        [
          653.2,
          373.8
        ]
      ]
    },
    {
      "name": "Jalan Rawamangun Muka Selatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          816.2,
          98.1
        ],
        [
          801.3,
          78.1
        ]
      ]
    },
    {
      "name": "Jalan Bangunan Timur",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          905.7,
          -79.7
        ],
        [
          875.9,
          -75.6
        ]
      ]
    },
    {
      "name": "Jalan Utan Panjang Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          420.7,
          -446
        ],
        [
          414.4,
          -450.7
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          387.5,
          -604.5
        ],
        [
          390.1,
          -602.4
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          389.6,
          -592.7
        ],
        [
          390.7,
          -586.5
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          801.8,
          440.7
        ],
        [
          820.1,
          451
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          720.1,
          329.1
        ],
        [
          719.2,
          306.4
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          724.9,
          403.5
        ],
        [
          724.3,
          399.3
        ],
        [
          725.1,
          397
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          726.3,
          415.8
        ],
        [
          724.9,
          403.5
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Jaya Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          898.1,
          282.3
        ],
        [
          897.4,
          276.6
        ]
      ]
    },
    {
      "name": "Jalan Perintis Kemerdekaan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          796.8,
          -402.1
        ],
        [
          790.2,
          -402.8
        ]
      ]
    },
    {
      "name": "Jalan Perintis Kemerdekaan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          792.5,
          -405.3
        ],
        [
          796.9,
          -404.3
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          882.5,
          -227.9
        ],
        [
          864.4,
          -233.3
        ],
        [
          845.3,
          -240.5
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          845.8,
          -241.8
        ],
        [
          882.8,
          -229.4
        ]
      ]
    },
    {
      "name": "Jalan Profesor Dokter Supomo SH",
      "type": "primary",
      "width": 18,
      "points": [
        [
          317,
          520.4
        ],
        [
          332.4,
          506.7
        ]
      ]
    },
    {
      "name": "Jalan Perintis Kemerdekaan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          823.2,
          -393.6
        ],
        [
          831.2,
          -389.5
        ],
        [
          844.8,
          -380.9
        ]
      ]
    },
    {
      "name": "Jalan Perintis Kemerdekaan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          892.2,
          -347.4
        ],
        [
          823.2,
          -390.1
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          716.7,
          284.9
        ],
        [
          725.4,
          284.7
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          732.1,
          -41.3
        ],
        [
          735,
          -64.4
        ],
        [
          735.8,
          -80.3
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          738.8,
          -67.1
        ],
        [
          735.5,
          -40.9
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          611.6,
          416.6
        ],
        [
          610.1,
          414.4
        ],
        [
          598.8,
          374.6
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          661,
          -39.5
        ],
        [
          598.4,
          -33
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          598,
          -34.9
        ],
        [
          657.5,
          -41.2
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          457.9,
          -294.3
        ],
        [
          494.1,
          -299.9
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          457.7,
          -295.3
        ],
        [
          494.5,
          -301.1
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          440.6,
          -291.3
        ],
        [
          457.9,
          -294.3
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          410.9,
          -290.6
        ],
        [
          432.7,
          -291.8
        ],
        [
          455.1,
          -294.9
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          591,
          -339.1
        ],
        [
          595.2,
          -341.2
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          551.6,
          -322
        ],
        [
          594.7,
          -342
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          898.5,
          -591.3
        ],
        [
          902.1,
          -597.9
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          902.8,
          -588
        ],
        [
          889.8,
          -566.9
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "primary",
      "width": 18,
      "points": [
        [
          327.3,
          197.6
        ],
        [
          334.3,
          198.7
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          466.6,
          97.8
        ],
        [
          438,
          69.2
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          371.5,
          -13.2
        ],
        [
          377.6,
          -1.3
        ]
      ]
    },
    {
      "name": "Jalan Tambak",
      "type": "primary",
      "width": 18,
      "points": [
        [
          363.3,
          158.7
        ],
        [
          369.3,
          125.4
        ]
      ]
    },
    {
      "name": "Jalan Tambak",
      "type": "primary",
      "width": 18,
      "points": [
        [
          362.8,
          176.8
        ],
        [
          361.8,
          168.6
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          772,
          -373.8
        ],
        [
          777,
          -388.9
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          541.3,
          430.2
        ],
        [
          538,
          430.2
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          536.7,
          429.3
        ],
        [
          544.6,
          428.2
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          455.6,
          426.1
        ],
        [
          468.8,
          429.8
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          447.2,
          426.9
        ],
        [
          413.3,
          418.9
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          468.4,
          430.8
        ],
        [
          463,
          430.1
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          384.7,
          407.2
        ],
        [
          390.8,
          408.8
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          612.1,
          423.5
        ],
        [
          610.1,
          417
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          541.3,
          430.2
        ],
        [
          538,
          431.2
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          803.1,
          -427.3
        ],
        [
          790.4,
          -408.1
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          814.4,
          -451.5
        ],
        [
          817.5,
          -455.6
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          811.1,
          -446.6
        ],
        [
          814.4,
          -451.5
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          760.1,
          -331.5
        ],
        [
          765.9,
          -350.8
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          747.9,
          -277.3
        ],
        [
          759.1,
          -328
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          744.1,
          -241.9
        ],
        [
          745.1,
          -255.2
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          737.9,
          -139.2
        ],
        [
          738.3,
          -154.7
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          500.1,
          17.9
        ],
        [
          497.2,
          19.9
        ]
      ]
    },
    {
      "name": "Jalan Perintis Kemerdekaan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          960,
          -305.4
        ],
        [
          944.9,
          -315.3
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          664,
          423.2
        ],
        [
          653.5,
          424.1
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          793.6,
          439.2
        ],
        [
          771.1,
          425.3
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          829.9,
          460.1
        ],
        [
          823,
          455.7
        ]
      ]
    },
    {
      "name": "Jalan Otto Iskandar Dinata",
      "type": "primary",
      "width": 18,
      "points": [
        [
          624,
          468.6
        ],
        [
          624.3,
          510.7
        ]
      ]
    },
    {
      "name": "Jalan Otto Iskandar Dinata",
      "type": "primary",
      "width": 18,
      "points": [
        [
          622.5,
          446.4
        ],
        [
          624.1,
          455.8
        ],
        [
          624,
          468.6
        ]
      ]
    },
    {
      "name": "Jalan Otto Iskandar Dinata",
      "type": "primary",
      "width": 18,
      "points": [
        [
          620.9,
          439.1
        ],
        [
          622.5,
          446.4
        ]
      ]
    },
    {
      "name": "Jalan Otto Iskandar Dinata",
      "type": "primary",
      "width": 18,
      "points": [
        [
          620.9,
          428
        ],
        [
          619.6,
          432
        ],
        [
          620,
          435.2
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          695.8,
          420.9
        ],
        [
          709,
          423.3
        ],
        [
          726,
          422.2
        ]
      ]
    },
    {
      "name": "Jalan Dokter Saharjo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          342.6,
          464.8
        ],
        [
          343.6,
          452
        ],
        [
          342.8,
          427.3
        ],
        [
          343.2,
          415.8
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          689.9,
          421.3
        ],
        [
          674.8,
          421.4
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          674.8,
          421.4
        ],
        [
          666.8,
          421.9
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          605.3,
          420.3
        ],
        [
          609.6,
          418.9
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          623,
          424
        ],
        [
          620.9,
          428
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          634.7,
          367.9
        ],
        [
          634.5,
          372.7
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          619.6,
          313
        ],
        [
          635,
          356.5
        ],
        [
          634.7,
          367.9
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          777,
          -388.9
        ],
        [
          785.5,
          -407
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          885.8,
          -568.3
        ],
        [
          891.6,
          -578.8
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          737.6,
          -129.3
        ],
        [
          737.9,
          -139.2
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          736.3,
          -101.3
        ],
        [
          737.6,
          -129.3
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          735.8,
          -80.3
        ],
        [
          736.1,
          -92.3
        ]
      ]
    },
    {
      "name": "Jalan Bangunan Timur",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          934.5,
          -84.2
        ],
        [
          959.2,
          -88.9
        ]
      ]
    },
    {
      "name": "Jalan Kayu Manis Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          544.2,
          31
        ],
        [
          530.9,
          -1.3
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          709.3,
          69.6
        ],
        [
          717.8,
          34.1
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          717.9,
          278.4
        ],
        [
          717.7,
          272.3
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          716,
          238.1
        ],
        [
          715.6,
          230.4
        ]
      ]
    },
    {
      "name": "Jalan Haji Darip",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          932.9,
          242.9
        ],
        [
          935,
          240.6
        ],
        [
          960,
          223.1
        ]
      ]
    },
    {
      "name": "Jalan Haji Darip",
      "type": "primary",
      "width": 18,
      "points": [
        [
          871.4,
          277.9
        ],
        [
          865.6,
          278.3
        ]
      ]
    },
    {
      "name": "Jalan I Gusti Ngurah Rai",
      "type": "primary",
      "width": 18,
      "points": [
        [
          912.7,
          274.3
        ],
        [
          907.5,
          275.8
        ],
        [
          898.3,
          276.5
        ]
      ]
    },
    {
      "name": "Jalan Haji Darip",
      "type": "primary",
      "width": 18,
      "points": [
        [
          847.4,
          277
        ],
        [
          868.3,
          275.4
        ]
      ]
    },
    {
      "name": "Jalan I Gusti Ngurah Rai",
      "type": "primary",
      "width": 18,
      "points": [
        [
          868.3,
          275.4
        ],
        [
          910.2,
          272.9
        ]
      ]
    },
    {
      "name": "Jalan Pegambiran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          947.3,
          99.6
        ],
        [
          951.1,
          84.1
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          467.9,
          -612.6
        ],
        [
          473.9,
          -615
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          467.9,
          -612.6
        ],
        [
          473.4,
          -612.8
        ],
        [
          477.6,
          -611.2
        ]
      ]
    },
    {
      "name": "Jalan Boulevard Barat",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          960,
          -605.1
        ],
        [
          941.7,
          -615
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          649.2,
          -362
        ],
        [
          597.8,
          -337.9
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          382.8,
          100.5
        ],
        [
          389.4,
          96.5
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          411.5,
          39.1
        ],
        [
          422.9,
          50
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          429,
          55.8
        ],
        [
          435.1,
          61.4
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          439.5,
          65.2
        ],
        [
          459.8,
          86.5
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          398.5,
          91.6
        ],
        [
          406.2,
          85.9
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          483.5,
          26
        ],
        [
          487.2,
          23.6
        ]
      ]
    },
    {
      "name": "Jalan Slamet Riyadi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          517.4,
          226.1
        ],
        [
          524.9,
          222.8
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          430.5,
          420.1
        ],
        [
          446.1,
          423.7
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          446.1,
          423.7
        ],
        [
          455.6,
          426.1
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          482.5,
          434.8
        ],
        [
          473.3,
          433.1
        ],
        [
          463,
          430.1
        ]
      ]
    },
    {
      "name": "Jalan Rawamangun Muka Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          807.2,
          26.6
        ],
        [
          809,
          30.6
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          422.9,
          50
        ],
        [
          429,
          55.8
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          413,
          46.1
        ],
        [
          397.5,
          30.6
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          415.4,
          48.3
        ],
        [
          413,
          46.1
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          382.1,
          13.6
        ],
        [
          378.5,
          7.8
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          374.8,
          0.5
        ],
        [
          360.4,
          -28.3
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          343.3,
          -59.5
        ],
        [
          333,
          -78.7
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          350.5,
          -46.6
        ],
        [
          348.5,
          -49.9
        ]
      ]
    },
    {
      "name": "Jalan Kramat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          323.3,
          -95.7
        ],
        [
          317,
          -106.5
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          332.3,
          -86.4
        ],
        [
          337.1,
          -78.2
        ]
      ]
    },
    {
      "name": "Jalan Kramat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          328.1,
          -93.7
        ],
        [
          332.3,
          -86.4
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          357,
          -40.8
        ],
        [
          360.6,
          -34
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          358,
          -32.8
        ],
        [
          355,
          -38.4
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Dalam Jakarta",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          760.8,
          560
        ],
        [
          752.2,
          525.3
        ]
      ]
    },
    {
      "name": "Jalan Pangkalan Asem",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          510.9,
          -223.5
        ],
        [
          520.2,
          -194.5
        ]
      ]
    },
    {
      "name": "Jalan Kramat Jaya Baru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          441.3,
          -191.2
        ],
        [
          439.4,
          -163.5
        ],
        [
          439.4,
          -152.5
        ]
      ]
    },
    {
      "name": "Jalan Kramat Jaya Baru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          414.6,
          -153.6
        ],
        [
          439.4,
          -152.5
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Selatan II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          440.1,
          269.9
        ],
        [
          437.9,
          272.6
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Selatan II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          437.9,
          272.6
        ],
        [
          436,
          269.4
        ]
      ]
    },
    {
      "name": "Jalan Proklamasi",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          375.1,
          108
        ],
        [
          372.1,
          109
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Selatan II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          438.5,
          290.1
        ],
        [
          437.5,
          287.7
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Selatan II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          437.5,
          287.7
        ],
        [
          436.7,
          284.8
        ],
        [
          437.3,
          276
        ]
      ]
    },
    {
      "name": "Jalan Kb. Nanas",
      "type": "residential",
      "width": 10,
      "points": [
        [
          804.7,
          526.2
        ],
        [
          804.8,
          516
        ],
        [
          803.1,
          510.5
        ],
        [
          802.6,
          502.7
        ],
        [
          788.4,
          502.1
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Residence",
      "type": "residential",
      "width": 10,
      "points": [
        [
          915,
          -247.9
        ],
        [
          931.7,
          -285.8
        ]
      ]
    },
    {
      "name": "Jalan Sunter Hijau X",
      "type": "residential",
      "width": 10,
      "points": [
        [
          774.3,
          -578.6
        ],
        [
          724.3,
          -573.1
        ]
      ]
    },
    {
      "name": "Jalan Haji Darip",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          886.5,
          275.6
        ],
        [
          906.8,
          274.4
        ],
        [
          911.9,
          273.3
        ],
        [
          915.3,
          270.4
        ],
        [
          926.5,
          253.3
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          444.8,
          52.9
        ],
        [
          460.4,
          40.6
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          437.2,
          63.2
        ],
        [
          439.5,
          65.2
        ]
      ]
    },
    {
      "name": "Jalan Haji Darip",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          960,
          225.3
        ],
        [
          934.1,
          243.2
        ]
      ]
    },
    {
      "name": "Jalan Haji Darip",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          926.5,
          253.3
        ],
        [
          932.9,
          242.9
        ]
      ]
    },
    {
      "name": "Jalan Haji Darip",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          934.1,
          243.2
        ],
        [
          927.2,
          253.5
        ]
      ]
    },
    {
      "name": "Jalan Haji Darip",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          868.3,
          275.4
        ],
        [
          876.9,
          276.2
        ],
        [
          886.5,
          275.6
        ]
      ]
    },
    {
      "name": "Jalan Haji Darip",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          886.5,
          276.4
        ],
        [
          871.4,
          277.9
        ]
      ]
    },
    {
      "name": "Jalan Sawo IV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          352.8,
          347
        ],
        [
          355.2,
          340.6
        ],
        [
          356,
          333.6
        ],
        [
          357.9,
          328.3
        ],
        [
          357.4,
          325.6
        ],
        [
          347.6,
          321.4
        ],
        [
          343.8,
          318
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Lontar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          945.8,
          313.9
        ],
        [
          940.3,
          311
        ],
        [
          941.5,
          302.8
        ],
        [
          943.4,
          297.5
        ],
        [
          944.8,
          281.5
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          709.3,
          125.6
        ],
        [
          706.9,
          102.8
        ],
        [
          707.6,
          86.6
        ],
        [
          711.3,
          66
        ],
        [
          719.5,
          30.5
        ],
        [
          735.1,
          -54.7
        ],
        [
          736.8,
          -77.7
        ],
        [
          740,
          -170.6
        ],
        [
          742.9,
          -213.5
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          720.5,
          290.9
        ],
        [
          715.3,
          167.2
        ]
      ]
    },
    {
      "name": "Jalan Serdang I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          539,
          -465.1
        ],
        [
          545.4,
          -477.5
        ],
        [
          552.4,
          -494.9
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          527.9,
          -305.9
        ],
        [
          527.2,
          -302
        ]
      ]
    },
    {
      "name": "Jalan Tanah Tinggi I A",
      "type": "residential",
      "width": 10,
      "points": [
        [
          317,
          -261.8
        ],
        [
          332.6,
          -208.6
        ],
        [
          335,
          -205
        ]
      ]
    },
    {
      "name": "Jalan Talang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          365.2,
          90.2
        ],
        [
          363.7,
          93.5
        ],
        [
          362.2,
          103.1
        ],
        [
          357.9,
          108.2
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi",
      "type": "residential",
      "width": 10,
      "points": [
        [
          402.5,
          -108.2
        ],
        [
          399.1,
          -105.6
        ],
        [
          398.3,
          -104.1
        ],
        [
          397.3,
          -91.9
        ],
        [
          395.2,
          -80.1
        ],
        [
          391.1,
          -70.7
        ],
        [
          385.9,
          -63.4
        ]
      ]
    },
    {
      "name": "Jalan Paseban Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          434.8,
          -29.1
        ],
        [
          432.9,
          -49.7
        ],
        [
          431.4,
          -55
        ]
      ]
    },
    {
      "name": "Jalan Galur Sari Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          624.7,
          48.7
        ],
        [
          629.5,
          74.4
        ],
        [
          630.8,
          88.6
        ]
      ]
    },
    {
      "name": "Jalan Moncokerto",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          620.3,
          121.7
        ],
        [
          622.1,
          135.2
        ]
      ]
    },
    {
      "name": "Jalan Nanas",
      "type": "residential",
      "width": 10,
      "points": [
        [
          679.4,
          19.3
        ],
        [
          676.8,
          38.1
        ],
        [
          666.6,
          58.1
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          355.8,
          182.2
        ],
        [
          355.6,
          180.1
        ],
        [
          359.1,
          174
        ]
      ]
    },
    {
      "name": "Jalan Rawasari Barat I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          664.6,
          -131.8
        ],
        [
          661.2,
          -140.3
        ],
        [
          658.5,
          -152.1
        ],
        [
          656.3,
          -157.9
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          428.8,
          65.4
        ],
        [
          429.9,
          63.7
        ],
        [
          429.5,
          61.3
        ]
      ]
    },
    {
      "name": "Jalan Kedondong Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          687.2,
          -615
        ],
        [
          672.1,
          -589.3
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          630.8,
          -525.6
        ],
        [
          690,
          -492.1
        ],
        [
          730.9,
          -467
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Baru Barat",
      "type": "residential",
      "width": 10,
      "points": [
        [
          513.4,
          -367.6
        ],
        [
          507.2,
          -331.5
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          317,
          -283.3
        ],
        [
          344.8,
          -285
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Timur V",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          366.8,
          -328
        ],
        [
          351.2,
          -285.4
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Barat Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          327.3,
          -347
        ],
        [
          361.3,
          -380.3
        ]
      ]
    },
    {
      "name": "Jalan Kemayoran Gempol",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          367.9,
          -487.6
        ],
        [
          405.1,
          -458.7
        ],
        [
          406.6,
          -458.3
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          513.6,
          8.8
        ],
        [
          500.1,
          17.9
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Indah Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          938.6,
          551.9
        ],
        [
          950.2,
          541.2
        ],
        [
          960,
          534
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Indah 2",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          960,
          516.8
        ],
        [
          955,
          507.1
        ]
      ]
    },
    {
      "name": "Jalan Bukit Gading Raya Boulevard",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          930,
          -370.5
        ],
        [
          924.9,
          -360.9
        ]
      ]
    },
    {
      "name": "Jalan Pulau Dana",
      "type": "residential",
      "width": 10,
      "points": [
        [
          954.5,
          -526.4
        ],
        [
          925.2,
          -544
        ]
      ]
    },
    {
      "name": "Jalan Prihatin",
      "type": "residential",
      "width": 10,
      "points": [
        [
          838.3,
          -409.4
        ],
        [
          858,
          -443.3
        ]
      ]
    },
    {
      "name": "Jalan I Gusti Ngurah Rai",
      "type": "primary",
      "width": 18,
      "points": [
        [
          916.6,
          271.9
        ],
        [
          948.9,
          262.3
        ],
        [
          960,
          260.3
        ]
      ]
    },
    {
      "name": "Jalan Balai Pustaka Baru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          888.2,
          23.5
        ],
        [
          889,
          -9.7
        ]
      ]
    },
    {
      "name": "Jalan Kebon Pala II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          547.9,
          276.2
        ],
        [
          531.8,
          287
        ],
        [
          528.5,
          286.2
        ],
        [
          526.1,
          287.1
        ],
        [
          524.7,
          288.7
        ],
        [
          522.2,
          289
        ]
      ]
    },
    {
      "name": "Jalan Tanah Tinggi I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          334.7,
          -206.8
        ],
        [
          335.6,
          -203.6
        ],
        [
          337.9,
          -199.8
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Barat 26",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          651.6,
          -162.3
        ],
        [
          643.9,
          -180.9
        ],
        [
          606.9,
          -223.4
        ],
        [
          582.4,
          -253.1
        ],
        [
          581,
          -255.6
        ],
        [
          580.1,
          -260.8
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          527.2,
          -302
        ],
        [
          517.5,
          -273.5
        ],
        [
          516.2,
          -268.8
        ],
        [
          516.7,
          -268
        ]
      ]
    },
    {
      "name": "Jalan Kayu Manis Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          553.2,
          192.2
        ],
        [
          545.6,
          165.5
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          859,
          -519.2
        ],
        [
          850.6,
          -504.4
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          725.4,
          284.7
        ],
        [
          737.6,
          284.1
        ]
      ]
    },
    {
      "name": "Jalan Tebet Timur Dalam II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          471.8,
          494.4
        ],
        [
          470.6,
          485.7
        ],
        [
          462.4,
          471.1
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Utara I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          373.4,
          197.6
        ],
        [
          364.5,
          188
        ],
        [
          362.2,
          187.6
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Utara I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          380.8,
          205.6
        ],
        [
          373.4,
          197.6
        ]
      ]
    },
    {
      "name": "Jalan Tanah Tinggi Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          406.7,
          -290.4
        ],
        [
          407.9,
          -318.8
        ]
      ]
    },
    {
      "name": "Jalan Slamet Riyadi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          491.7,
          250.1
        ],
        [
          494.9,
          248.9
        ]
      ]
    },
    {
      "name": "Jalan Slamet Riyadi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          488.1,
          252.7
        ],
        [
          484.9,
          254.1
        ]
      ]
    },
    {
      "name": "Jalan Slamet Riyadi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          492.1,
          250.8
        ],
        [
          488.1,
          252.7
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          329,
          -587.4
        ],
        [
          324.4,
          -586.5
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          384,
          -592.9
        ],
        [
          381.9,
          -594.8
        ],
        [
          379.3,
          -595.1
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Diponegoro",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          321.1,
          60.9
        ],
        [
          323.1,
          60
        ]
      ]
    },
    {
      "name": "Jalan Balai Pustaka Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          889,
          42.7
        ],
        [
          888.1,
          98
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          606.5,
          423.4
        ],
        [
          601.8,
          424.4
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          597.5,
          425.2
        ],
        [
          576.6,
          428.3
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          776.3,
          -407.1
        ],
        [
          784,
          -406.7
        ]
      ]
    },
    {
      "name": "Jalan Tambak",
      "type": "primary",
      "width": 18,
      "points": [
        [
          365,
          161.6
        ],
        [
          363.7,
          173.2
        ],
        [
          364,
          177.2
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          451.4,
          -290.5
        ],
        [
          441.5,
          -289.2
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          596,
          -338.5
        ],
        [
          576.5,
          -329.1
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "primary",
      "width": 18,
      "points": [
        [
          410.3,
          -457.5
        ],
        [
          409.6,
          -461.4
        ]
      ]
    },
    {
      "name": "Jalan Kemayoran Gempol",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          413.2,
          -451.7
        ],
        [
          408.9,
          -455
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Timur Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          413.7,
          -429.8
        ],
        [
          409.3,
          -425.9
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          595.7,
          -336.9
        ],
        [
          590.6,
          -334.5
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          527.2,
          -302
        ],
        [
          525.7,
          -305.1
        ]
      ]
    },
    {
      "name": "Jalan Tanah Tinggi Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          408.5,
          -326.5
        ],
        [
          408.9,
          -333.3
        ]
      ]
    },
    {
      "name": "Jalan Timah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          412.8,
          -326.1
        ],
        [
          420.1,
          -326
        ]
      ]
    },
    {
      "name": "Jalan Tanah Tinggi Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          408.2,
          -323
        ],
        [
          408.5,
          -326.5
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          583.1,
          -265.8
        ],
        [
          590.7,
          -265.7
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          574.9,
          -266
        ],
        [
          579.4,
          -265.8
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Barat 26",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          580.1,
          -260.8
        ],
        [
          579.4,
          -265.8
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Barat 26",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          579.4,
          -265.8
        ],
        [
          579.4,
          -285.5
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Dalam Jakarta",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          756.9,
          538.5
        ],
        [
          762.4,
          560
        ]
      ]
    },
    {
      "name": "Jalan Tol Bekasi–Cawang–Kampung Melayu",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          757.2,
          560
        ],
        [
          756.5,
          556.6
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          442.2,
          54.9
        ],
        [
          444.8,
          52.9
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          438.7,
          58
        ],
        [
          442.2,
          54.9
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          435.1,
          61.4
        ],
        [
          438.3,
          58.6
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          435.1,
          61.4
        ],
        [
          437.2,
          63.2
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          481.9,
          121.9
        ],
        [
          477.3,
          111.1
        ],
        [
          471.4,
          102.8
        ],
        [
          466.6,
          97.8
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          629.8,
          337.5
        ],
        [
          636.8,
          357.9
        ],
        [
          636.1,
          386.8
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          611.6,
          295.7
        ],
        [
          620.5,
          311.2
        ],
        [
          627.1,
          329.9
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          525.4,
          224
        ],
        [
          531.8,
          238.9
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          522,
          224.2
        ],
        [
          516.7,
          210.8
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          529.2,
          240.2
        ],
        [
          522.5,
          225.3
        ]
      ]
    },
    {
      "name": "Jalan Slamet Riyadi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          525.4,
          224
        ],
        [
          502.4,
          233.2
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          542.1,
          264.7
        ],
        [
          536.8,
          255
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          761.5,
          420.9
        ],
        [
          756.5,
          420.8
        ],
        [
          735.3,
          423.4
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          766.8,
          421.3
        ],
        [
          775.6,
          425.7
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Barat Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          361.3,
          -380.3
        ],
        [
          373,
          -392
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Barat Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          373,
          -392
        ],
        [
          407.4,
          -425.7
        ],
        [
          409.3,
          -425.9
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Timur Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          363.1,
          -378.8
        ],
        [
          329,
          -345.4
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Timur Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          409.3,
          -425.9
        ],
        [
          409.2,
          -424.3
        ],
        [
          404,
          -418.2
        ],
        [
          363.1,
          -378.8
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          576.6,
          425.2
        ],
        [
          597.4,
          421.6
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          534.6,
          428.3
        ],
        [
          543,
          427.4
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          538,
          431.2
        ],
        [
          512.8,
          434.8
        ]
      ]
    },
    {
      "name": "Jalan Bukit Duri Tanjakan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          508.7,
          430.5
        ],
        [
          510.3,
          427.8
        ]
      ]
    },
    {
      "name": "Jalan Bukit Duri Tanjakan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          510.3,
          427.8
        ],
        [
          512.4,
          430.3
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kirana III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          751.7,
          -545.9
        ],
        [
          748.3,
          -579.6
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Baru Timur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          551.7,
          -357.8
        ],
        [
          567.9,
          -392.7
        ]
      ]
    },
    {
      "name": "Jalan Bendungan Jago",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          498.1,
          -463.6
        ],
        [
          483.2,
          -473.4
        ]
      ]
    },
    {
      "name": "Jalan Bendungan Jago",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          508.2,
          -457.5
        ],
        [
          498.1,
          -463.6
        ]
      ]
    },
    {
      "name": "Jalan F",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          497.3,
          -440.1
        ],
        [
          508.2,
          -457.5
        ]
      ]
    },
    {
      "name": "Jalan Serdang Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          498.1,
          -463.6
        ],
        [
          501,
          -468.8
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          729,
          400.2
        ],
        [
          729.7,
          406.1
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          725.4,
          339.7
        ],
        [
          729,
          400.2
        ]
      ]
    },
    {
      "name": "Jalan Haji Darip",
      "type": "primary",
      "width": 18,
      "points": [
        [
          836.5,
          277.7
        ],
        [
          842.4,
          277.3
        ]
      ]
    },
    {
      "name": "Jalan Haji Darip",
      "type": "primary",
      "width": 18,
      "points": [
        [
          842.4,
          277.3
        ],
        [
          847.4,
          277
        ]
      ]
    },
    {
      "name": "Jalan Haji Darip",
      "type": "primary",
      "width": 18,
      "points": [
        [
          855.3,
          279
        ],
        [
          847.7,
          279.5
        ]
      ]
    },
    {
      "name": "Jalan Haji Darip",
      "type": "primary",
      "width": 18,
      "points": [
        [
          865.6,
          278.3
        ],
        [
          855.3,
          279
        ]
      ]
    },
    {
      "name": "Jalan I Gusti Ngurah Rai",
      "type": "primary",
      "width": 18,
      "points": [
        [
          897.4,
          276.6
        ],
        [
          889.4,
          277.1
        ]
      ]
    },
    {
      "name": "Jalan I Gusti Ngurah Rai",
      "type": "primary",
      "width": 18,
      "points": [
        [
          889.4,
          277.1
        ],
        [
          871.4,
          277.9
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Muara 1",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          820.1,
          451
        ],
        [
          829.1,
          455.2
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          798,
          438.7
        ],
        [
          801.8,
          440.7
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          794.7,
          436.9
        ],
        [
          798,
          438.7
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          791.9,
          435
        ],
        [
          794.7,
          436.9
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          775.6,
          425.7
        ],
        [
          791.9,
          435
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          820.1,
          451
        ],
        [
          831.9,
          459
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          831.9,
          459
        ],
        [
          836.9,
          462.1
        ]
      ]
    },
    {
      "name": "Jalan Howitzer",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          608.2,
          -474.4
        ],
        [
          643.3,
          -456
        ]
      ]
    },
    {
      "name": "Jalan Howitzer",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          591.8,
          -481.7
        ],
        [
          608.2,
          -474.4
        ]
      ]
    },
    {
      "name": "Jalan Sumur Batu Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          631.1,
          -522.1
        ],
        [
          608.2,
          -474.4
        ]
      ]
    },
    {
      "name": "Jalan Sumur Batu Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          608.2,
          -474.4
        ],
        [
          592.1,
          -441.5
        ],
        [
          584.2,
          -427.5
        ]
      ]
    },
    {
      "name": "Jalan Serdang Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          566.4,
          -436.1
        ],
        [
          570,
          -432.9
        ],
        [
          575.3,
          -430.2
        ],
        [
          584.2,
          -427.5
        ]
      ]
    },
    {
      "name": "Jalan Sumur Batu",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          616.4,
          -408.7
        ],
        [
          597.8,
          -423.4
        ],
        [
          590.7,
          -426.4
        ],
        [
          584.2,
          -427.5
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          616.6,
          -351
        ],
        [
          621.9,
          -353.5
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          608.9,
          -348.6
        ],
        [
          615.2,
          -351.5
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          615.4,
          -351.6
        ],
        [
          639.8,
          -363
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          602.7,
          -344.7
        ],
        [
          616.6,
          -351
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          656.6,
          -369.8
        ],
        [
          660.7,
          -371.5
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          621.9,
          -353.5
        ],
        [
          656.6,
          -369.8
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          639.8,
          -363
        ],
        [
          653.6,
          -369.4
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          699.2,
          -390.3
        ],
        [
          704.1,
          -392.2
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          681.7,
          -382.5
        ],
        [
          699.2,
          -390.3
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          660.7,
          -371.5
        ],
        [
          683.6,
          -382.2
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          656.8,
          -370.9
        ],
        [
          677.3,
          -380.4
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          700.8,
          -389.8
        ],
        [
          707.5,
          -391.9
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          695.9,
          -387.7
        ],
        [
          700.8,
          -389.8
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          683.6,
          -382.2
        ],
        [
          695.9,
          -387.7
        ]
      ]
    },
    {
      "name": "Jalan Howitzer",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          643.3,
          -456
        ],
        [
          646.5,
          -454.4
        ]
      ]
    },
    {
      "name": "Jalan Howitzer",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          646.5,
          -454.4
        ],
        [
          648.9,
          -453.1
        ]
      ]
    },
    {
      "name": "Jalan Howitzer",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          648.9,
          -453.1
        ],
        [
          651.9,
          -451.4
        ]
      ]
    },
    {
      "name": "Jalan Howitzer",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          651.9,
          -451.4
        ],
        [
          654.6,
          -449.9
        ]
      ]
    },
    {
      "name": "Jalan Howitzer",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          654.6,
          -449.9
        ],
        [
          692.7,
          -428.2
        ]
      ]
    },
    {
      "name": "Jalan Bendungan Jago",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          448.5,
          -497.1
        ],
        [
          452,
          -494.9
        ]
      ]
    },
    {
      "name": "Jalan Kemayoran Gempol",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          455.4,
          -492.8
        ],
        [
          453.9,
          -490.3
        ]
      ]
    },
    {
      "name": "Jalan Dakota Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          452,
          -494.9
        ],
        [
          453.8,
          -498.1
        ]
      ]
    },
    {
      "name": "Jalan Bendungan Jago",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          457.7,
          -491.3
        ],
        [
          455.4,
          -492.8
        ]
      ]
    },
    {
      "name": "Jalan Profesor Dokter Supomo SH",
      "type": "primary",
      "width": 18,
      "points": [
        [
          335.6,
          505.2
        ],
        [
          333.7,
          507.2
        ]
      ]
    },
    {
      "name": "Jalan Profesor Dokter Supomo SH",
      "type": "primary",
      "width": 18,
      "points": [
        [
          342.9,
          481.6
        ],
        [
          340.5,
          494.7
        ],
        [
          338.1,
          501
        ]
      ]
    },
    {
      "name": "Jalan Profesor Dokter Supomo SH",
      "type": "primary",
      "width": 18,
      "points": [
        [
          332.4,
          506.7
        ],
        [
          334.6,
          504.4
        ]
      ]
    },
    {
      "name": "Jalan Profesor Dokter Supomo SH",
      "type": "primary",
      "width": 18,
      "points": [
        [
          336.7,
          500.7
        ],
        [
          338.5,
          496.4
        ],
        [
          340.5,
          485.4
        ]
      ]
    },
    {
      "name": "Jalan Dokter Saharjo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          344.3,
          464.9
        ],
        [
          344,
          468.3
        ]
      ]
    },
    {
      "name": "Jalan Dokter Saharjo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          344,
          468.3
        ],
        [
          342.9,
          481.6
        ]
      ]
    },
    {
      "name": "Jalan Dokter Saharjo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          342.1,
          470.3
        ],
        [
          342.6,
          464.8
        ]
      ]
    },
    {
      "name": "Jalan Dokter Saharjo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          341.5,
          477.7
        ],
        [
          342.1,
          470.3
        ]
      ]
    },
    {
      "name": "Jalan Dokter Saharjo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          341.1,
          481.4
        ],
        [
          341.5,
          477.7
        ]
      ]
    },
    {
      "name": "Jalan Tebet Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          344.8,
          482.2
        ],
        [
          342.9,
          481.6
        ]
      ]
    },
    {
      "name": "Jalan Profesor Dokter Supomo SH",
      "type": "primary",
      "width": 18,
      "points": [
        [
          340.5,
          485.4
        ],
        [
          341.1,
          481.4
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          715.3,
          167.2
        ],
        [
          715,
          157.6
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          715,
          157.6
        ],
        [
          711.6,
          135.7
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          714.6,
          140.9
        ],
        [
          716.3,
          149.5
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          718,
          188.2
        ],
        [
          725.3,
          362.8
        ],
        [
          727.7,
          394.9
        ],
        [
          733.1,
          434.9
        ],
        [
          740,
          467.6
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "primary",
      "width": 18,
      "points": [
        [
          327.3,
          197.6
        ],
        [
          338.4,
          197.5
        ],
        [
          346.5,
          195.3
        ]
      ]
    },
    {
      "name": "Jalan Tambak",
      "type": "primary",
      "width": 18,
      "points": [
        [
          369.5,
          124.2
        ],
        [
          372.1,
          109
        ]
      ]
    },
    {
      "name": "Jalan Tambak",
      "type": "primary",
      "width": 18,
      "points": [
        [
          362.7,
          161
        ],
        [
          363.3,
          158.7
        ]
      ]
    },
    {
      "name": "Jalan Tambak",
      "type": "primary",
      "width": 18,
      "points": [
        [
          361.8,
          168.6
        ],
        [
          362.4,
          163
        ]
      ]
    },
    {
      "name": "Jalan Industri Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          324.4,
          -586.5
        ],
        [
          317,
          -586.6
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          477.6,
          -611.2
        ],
        [
          480,
          -610.1
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          479.3,
          -607.9
        ],
        [
          475.3,
          -609.9
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          491.5,
          -601
        ],
        [
          485.9,
          -604.1
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          522.5,
          -585.4
        ],
        [
          519.8,
          -585.7
        ],
        [
          504.2,
          -593.9
        ]
      ]
    },
    {
      "name": "Terowongan Matraman",
      "type": "primary",
      "width": 18,
      "points": [
        [
          411.2,
          81.6
        ],
        [
          422.3,
          72.1
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          406.2,
          85.9
        ],
        [
          410.7,
          81
        ]
      ]
    },
    {
      "name": "Jalan Angkasa Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          390.3,
          -551.2
        ],
        [
          369.9,
          -548
        ],
        [
          352.3,
          -546.5
        ]
      ]
    },
    {
      "name": "Jalan Angkasa Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          352.5,
          -547.6
        ],
        [
          369.7,
          -549.3
        ],
        [
          389.8,
          -552.8
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          384,
          -592.9
        ],
        [
          381.7,
          -602.1
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          390.2,
          -556.5
        ],
        [
          384,
          -592.9
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          381,
          5
        ],
        [
          382.6,
          7.7
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Diponegoro",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          377.9,
          6.8
        ],
        [
          381,
          5
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          333,
          -78.7
        ],
        [
          330.3,
          -83.5
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          360.6,
          -34
        ],
        [
          362.8,
          -29.8
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          360.4,
          -28.3
        ],
        [
          358,
          -32.8
        ]
      ]
    },
    {
      "name": "Jalan Kramat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          326.8,
          -89.5
        ],
        [
          323.3,
          -95.7
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          357.2,
          -594.5
        ],
        [
          365.1,
          -595.8
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          362,
          -596.8
        ],
        [
          378.3,
          -599.2
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          409,
          -486.5
        ],
        [
          411.8,
          -470.3
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          408.2,
          -491.7
        ],
        [
          409,
          -486.5
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          411.8,
          -470.3
        ],
        [
          415.3,
          -451.3
        ]
      ]
    },
    {
      "name": "Jalan Casa",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          422.8,
          -500.3
        ],
        [
          437,
          -502.9
        ]
      ]
    },
    {
      "name": "Jalan Casa",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          423.2,
          -498.6
        ],
        [
          411.2,
          -496
        ],
        [
          409.5,
          -494.6
        ],
        [
          408.2,
          -491.7
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          780.2,
          -382.2
        ],
        [
          775.5,
          -368.6
        ],
        [
          771.7,
          -353.9
        ]
      ]
    },
    {
      "name": "Jalan Perintis Kemerdekaan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          819.5,
          -395.5
        ],
        [
          821.6,
          -394.5
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          749.4,
          -273.1
        ],
        [
          748.4,
          -268.4
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          748.4,
          -268.4
        ],
        [
          745.8,
          -235.9
        ]
      ]
    },
    {
      "name": "Jalan Danau Indah Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          794.9,
          -546.3
        ],
        [
          791.5,
          -545.4
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          916.5,
          -613.8
        ],
        [
          909,
          -602.1
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          909,
          -602.1
        ],
        [
          863.6,
          -526.5
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          402,
          -491.5
        ],
        [
          400.4,
          -495.1
        ],
        [
          400.8,
          -499.6
        ]
      ]
    },
    {
      "name": "Jalan Angkasa",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          343.2,
          -541.3
        ],
        [
          340,
          -544
        ]
      ]
    },
    {
      "name": "Jalan Angkasa",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          343.6,
          -544.8
        ],
        [
          343.2,
          -541.3
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          742.9,
          -213.5
        ],
        [
          744.4,
          -230.7
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          744.8,
          -236.7
        ],
        [
          746.8,
          -266.3
        ]
      ]
    },
    {
      "name": "Jalan Casa",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          410.3,
          -498.1
        ],
        [
          422.8,
          -500.3
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          353.8,
          -283.1
        ],
        [
          343.8,
          -282.3
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          397.7,
          -286.2
        ],
        [
          353.8,
          -283.1
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          340.9,
          -282.7
        ],
        [
          337.8,
          -282.9
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          344.8,
          -285
        ],
        [
          366,
          -286.7
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          596.2,
          -341.6
        ],
        [
          602.7,
          -344.7
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          551.3,
          -320.5
        ],
        [
          573.2,
          -330.8
        ]
      ]
    },
    {
      "name": "Jalan Sunan Giri",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          862.1,
          -12.4
        ],
        [
          863,
          -18.3
        ],
        [
          861.7,
          -22.2
        ]
      ]
    },
    {
      "name": "Jalan Sunan Giri",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          863.3,
          -22.1
        ],
        [
          863.8,
          -16.9
        ],
        [
          862.1,
          -12.4
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          755.6,
          -406.4
        ],
        [
          769.4,
          -407.2
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          811.9,
          -440.5
        ],
        [
          811.5,
          -438.7
        ],
        [
          805.3,
          -429.2
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Lama III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          783.9,
          150.2
        ],
        [
          783.9,
          153.1
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          657.5,
          -41.2
        ],
        [
          661.5,
          -41.6
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          726.7,
          -39.8
        ],
        [
          730.4,
          -39.5
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          719.2,
          306.4
        ],
        [
          718.4,
          290.7
        ]
      ]
    },
    {
      "name": "Jalan Haji Kaiman",
      "type": "residential",
      "width": 10,
      "points": [
        [
          679.7,
          351.5
        ],
        [
          714.1,
          347.7
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Timur III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          368.4,
          -327.9
        ],
        [
          324.3,
          -330.1
        ]
      ]
    },
    {
      "name": "Jalan Tebet Barat Dalam",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          318.7,
          520.6
        ],
        [
          328.2,
          530.9
        ],
        [
          329.9,
          534.3
        ],
        [
          331.8,
          560
        ]
      ]
    },
    {
      "name": "Jalan Kramat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          317,
          -113.2
        ],
        [
          328.1,
          -93.7
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          413.3,
          418.9
        ],
        [
          407.1,
          417.3
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          725.5,
          309
        ],
        [
          726.1,
          330.8
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          601.8,
          424.4
        ],
        [
          597.5,
          425.2
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Utara II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          859.2,
          -285.6
        ],
        [
          871.2,
          -313.8
        ]
      ]
    },
    {
      "name": "Jalan Pemuda",
      "type": "primary",
      "width": 18,
      "points": [
        [
          750.7,
          -33.5
        ],
        [
          747.5,
          -33.9
        ]
      ]
    },
    {
      "name": "Jalan Pemuda",
      "type": "primary",
      "width": 18,
      "points": [
        [
          747.5,
          -33.9
        ],
        [
          739.8,
          -35
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          624.1,
          294.6
        ],
        [
          621.1,
          294.7
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          740.1,
          -95.1
        ],
        [
          739.9,
          -86.7
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          441.5,
          -289.2
        ],
        [
          413.8,
          -287
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          854.9,
          454.1
        ],
        [
          856.5,
          451.1
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          856.5,
          451.1
        ],
        [
          856,
          454.4
        ]
      ]
    },
    {
      "name": "Jalan Raden Saleh Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          317,
          -76.3
        ],
        [
          326.9,
          -81.6
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          723.5,
          3.3
        ],
        [
          730.9,
          -34.4
        ]
      ]
    },
    {
      "name": "Jalan Batu Pancawarna",
      "type": "residential",
      "width": 10,
      "points": [
        [
          847,
          -201.4
        ],
        [
          857.8,
          -169.1
        ],
        [
          861.8,
          -167.7
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          771.7,
          -353.9
        ],
        [
          767.9,
          -342.6
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          726.2,
          11
        ],
        [
          725.3,
          15.5
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          732.8,
          -26.3
        ],
        [
          726.2,
          11
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          724.5,
          19.6
        ],
        [
          722.8,
          28.1
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          717.7,
          272.3
        ],
        [
          716,
          238.1
        ]
      ]
    },
    {
      "name": "Jalan Haji Darip",
      "type": "primary",
      "width": 18,
      "points": [
        [
          740.5,
          283.8
        ],
        [
          742.6,
          283.7
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XXVI A",
      "type": "residential",
      "width": 10,
      "points": [
        [
          607,
          -257.2
        ],
        [
          637,
          -257.3
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          731.3,
          444.3
        ],
        [
          728.5,
          432.7
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          732.1,
          446.9
        ],
        [
          731.3,
          444.3
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          722.6,
          29.1
        ],
        [
          718.6,
          47.3
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          716.5,
          56.6
        ],
        [
          711.8,
          75.6
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          711.8,
          75.6
        ],
        [
          712.7,
          78.2
        ],
        [
          712.9,
          85.1
        ],
        [
          712.5,
          95.9
        ],
        [
          710.9,
          103.3
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          710.9,
          103.3
        ],
        [
          712.3,
          118.5
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          432.1,
          67.7
        ],
        [
          410.2,
          86.4
        ],
        [
          404.3,
          90.2
        ]
      ]
    },
    {
      "name": "Jalan Bukit Gading Raya Boulevard",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          924.9,
          -360.9
        ],
        [
          917.4,
          -347
        ]
      ]
    },
    {
      "name": "Jalan Balai Pustaka Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          886.3,
          98.1
        ],
        [
          888.2,
          23.5
        ]
      ]
    },
    {
      "name": "Jalan Profesor Dokter Supomo SH",
      "type": "primary",
      "width": 18,
      "points": [
        [
          334.6,
          504.4
        ],
        [
          336.7,
          500.7
        ]
      ]
    },
    {
      "name": "Jalan Profesor Dokter Supomo SH",
      "type": "primary",
      "width": 18,
      "points": [
        [
          338.1,
          501
        ],
        [
          335.6,
          505.2
        ]
      ]
    },
    {
      "name": "Jalan Sungai Ciliwung",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          572.9,
          307.4
        ],
        [
          575.6,
          303.7
        ]
      ]
    },
    {
      "name": "Jalan Sungai Ciliwung",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          597.4,
          421.6
        ],
        [
          598.9,
          417.2
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          904.3,
          -590
        ],
        [
          902.9,
          -588.1
        ]
      ]
    },
    {
      "name": "Jalan Pesanggrahan Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          380.4,
          -609.3
        ],
        [
          379.4,
          -615
        ]
      ]
    },
    {
      "name": "Jalan Pesanggrahan Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          385.6,
          -615
        ],
        [
          387.5,
          -604.5
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          485.9,
          -604.1
        ],
        [
          479.3,
          -607.9
        ]
      ]
    },
    {
      "name": "Jalan Kayu Jati Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          861.3,
          -24.9
        ],
        [
          862.2,
          -34.9
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          698,
          -384.8
        ],
        [
          649.2,
          -362
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          750.3,
          -402.6
        ],
        [
          707.9,
          -389.4
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          765.3,
          -403.5
        ],
        [
          762.6,
          -403.3
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Barat",
      "type": "residential",
      "width": 10,
      "points": [
        [
          789.6,
          -260
        ],
        [
          797.4,
          -292
        ]
      ]
    },
    {
      "name": "Jalan Utan Kayu",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          643.5,
          -5.9
        ],
        [
          648.9,
          -0.2
        ],
        [
          670.4,
          17.3
        ],
        [
          676.5,
          18.9
        ],
        [
          688.8,
          20.4
        ]
      ]
    },
    {
      "name": "Jalan Tanah Tinggi I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          329,
          -245.6
        ],
        [
          329.7,
          -243.4
        ]
      ]
    },
    {
      "name": "Jalan Tanah Tinggi I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          326.9,
          -252
        ],
        [
          328.7,
          -246.7
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          648.4,
          -41.3
        ],
        [
          658.4,
          -42.2
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          658.4,
          -42.2
        ],
        [
          661.6,
          -42.5
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          542,
          -14.4
        ],
        [
          544.1,
          -16.3
        ],
        [
          555,
          -22.5
        ],
        [
          571.3,
          -29.2
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          539.1,
          -12.5
        ],
        [
          542,
          -14.4
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          526.3,
          -3.3
        ],
        [
          539.1,
          -12.5
        ]
      ]
    },
    {
      "name": "Jalan Rawasari Barat I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          654,
          -164.8
        ],
        [
          657.1,
          -158.2
        ]
      ]
    },
    {
      "name": "Jalan Rawasari Barat I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          656.3,
          -157.9
        ],
        [
          653.8,
          -163.5
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          497.2,
          19.9
        ],
        [
          491,
          24.1
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          343.8,
          -282.3
        ],
        [
          336.5,
          -281.6
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Ciliwung",
      "type": "residential",
      "width": 10,
      "points": [
        [
          561.8,
          304.2
        ],
        [
          558.4,
          304.6
        ],
        [
          553.4,
          307
        ],
        [
          532.1,
          318.5
        ],
        [
          525.7,
          319.6
        ],
        [
          520.5,
          318.9
        ],
        [
          517.6,
          317.4
        ],
        [
          506.6,
          305.9
        ],
        [
          504.9,
          304.7
        ],
        [
          501.9,
          304.8
        ],
        [
          499.2,
          308.2
        ],
        [
          495,
          317.6
        ]
      ]
    },
    {
      "name": "Jalan Utan Kayu",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          612.1,
          -19.1
        ],
        [
          626.2,
          -18.7
        ],
        [
          630.5,
          -17.7
        ],
        [
          642.4,
          -6.9
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          554.1,
          -17.3
        ],
        [
          545.2,
          -12.4
        ],
        [
          529.8,
          -2.1
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Utara I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          484.9,
          254.1
        ],
        [
          480.2,
          255.8
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Selatan I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          449.7,
          308.7
        ],
        [
          447,
          311.8
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Selatan II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          449.7,
          308.7
        ],
        [
          444.2,
          299.5
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          543.2,
          259.5
        ],
        [
          546.6,
          261.7
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Utara",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          842.9,
          -326.3
        ],
        [
          813,
          -332.7
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Kali Sunter",
      "type": "residential",
      "width": 10,
      "points": [
        [
          898.9,
          -569.6
        ],
        [
          924.4,
          -615
        ]
      ]
    },
    {
      "name": "Jalan Sunter Hijau Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          775.2,
          -548.2
        ],
        [
          727.6,
          -543.6
        ]
      ]
    },
    {
      "name": "Jalan Puma Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          429.1,
          -558
        ],
        [
          405.4,
          -553.9
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          704.8,
          286
        ],
        [
          716.7,
          284.9
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          485.3,
          -296
        ],
        [
          451.4,
          -290.5
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          335.7,
          -591.4
        ],
        [
          357.2,
          -594.5
        ]
      ]
    },
    {
      "name": "Jalan Pulo Gundul",
      "type": "residential",
      "width": 10,
      "points": [
        [
          403.1,
          -194.7
        ],
        [
          403.7,
          -226.7
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          739.8,
          -82.8
        ],
        [
          738.8,
          -67.1
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          739.9,
          -86.7
        ],
        [
          739.8,
          -82.8
        ]
      ]
    },
    {
      "name": "Jalan Pemuda",
      "type": "primary",
      "width": 18,
      "points": [
        [
          863.3,
          -22.1
        ],
        [
          750.7,
          -33.5
        ]
      ]
    },
    {
      "name": "Jalan Pemuda",
      "type": "primary",
      "width": 18,
      "points": [
        [
          892.8,
          -22.9
        ],
        [
          960,
          -22.1
        ]
      ]
    },
    {
      "name": "Jalan Kayu Jati III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          863.9,
          -70.3
        ],
        [
          888.1,
          -73.3
        ],
        [
          905.9,
          -76.8
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          740.6,
          -105.2
        ],
        [
          740.1,
          -95.1
        ]
      ]
    },
    {
      "name": "Jalan Sunan Giri",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          848.8,
          11.6
        ],
        [
          846.3,
          14.7
        ]
      ]
    },
    {
      "name": "Jalan Sunan Giri",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          846.3,
          14.7
        ],
        [
          843.3,
          19.3
        ],
        [
          842.8,
          24.8
        ]
      ]
    },
    {
      "name": "Jalan Sunan Giri",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          859,
          -3.4
        ],
        [
          855.2,
          3.3
        ]
      ]
    },
    {
      "name": "Jalan Sunan Giri",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          851.7,
          8.2
        ],
        [
          848.8,
          11.6
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          765.9,
          -350.8
        ],
        [
          768.3,
          -360.2
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          768.3,
          -360.2
        ],
        [
          769.3,
          -361
        ],
        [
          778,
          -388.8
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          665.8,
          419.7
        ],
        [
          674.9,
          419.8
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          778,
          -388.8
        ],
        [
          778.9,
          -391.1
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          531.8,
          245.1
        ],
        [
          530.1,
          241.8
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          532.7,
          240.8
        ],
        [
          534,
          243.7
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          793.1,
          -410.6
        ],
        [
          790.5,
          -406
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          807,
          -440.9
        ],
        [
          811.1,
          -446.6
        ]
      ]
    },
    {
      "name": "Flyover Pramuka Matraman",
      "type": "primary",
      "width": 18,
      "points": [
        [
          469.6,
          38
        ],
        [
          462.6,
          42.4
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          487.7,
          24.7
        ],
        [
          481.2,
          30.2
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          722.5,
          246.2
        ],
        [
          724.1,
          278.9
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          718.6,
          47.3
        ],
        [
          716.5,
          56.6
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          712.2,
          141.5
        ],
        [
          707.5,
          121.1
        ],
        [
          705.9,
          109.4
        ],
        [
          706.8,
          88.1
        ],
        [
          709.3,
          69.6
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          713.5,
          151.4
        ],
        [
          712.2,
          141.5
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          715.5,
          228.9
        ],
        [
          716.1,
          224.4
        ],
        [
          715.7,
          200.3
        ],
        [
          713.5,
          151.4
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          713.2,
          169
        ],
        [
          712.9,
          152.9
        ],
        [
          713.5,
          151.4
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          714.2,
          209.9
        ],
        [
          713.2,
          169
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          759.1,
          -328
        ],
        [
          760.1,
          -331.5
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          754.6,
          -313.7
        ],
        [
          759.1,
          -328
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          746,
          -262.6
        ],
        [
          745.6,
          -267.6
        ],
        [
          746.5,
          -278.2
        ],
        [
          754.6,
          -313.7
        ]
      ]
    },
    {
      "name": "Jalan Pemuda",
      "type": "primary",
      "width": 18,
      "points": [
        [
          886.1,
          -23.2
        ],
        [
          890.4,
          -23
        ]
      ]
    },
    {
      "name": "Jalan Bujana Tirta 6",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          816.2,
          98.1
        ],
        [
          798,
          99.8
        ],
        [
          795.2,
          101
        ]
      ]
    },
    {
      "name": "Jalan Waru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          953.8,
          23.7
        ],
        [
          960,
          23.5
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          628.4,
          411.4
        ],
        [
          625.7,
          417.7
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          766.1,
          -336.6
        ],
        [
          752.7,
          -286.4
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          754.6,
          -298
        ],
        [
          751.9,
          -287.7
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          751.9,
          -287.7
        ],
        [
          749.4,
          -273.1
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          750.6,
          -287.3
        ],
        [
          752.9,
          -297.8
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          746.9,
          -266.5
        ],
        [
          750.6,
          -287.3
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          677.3,
          -380.4
        ],
        [
          681.7,
          -382.5
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          653.6,
          -369.4
        ],
        [
          656.8,
          -370.9
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          523.5,
          -309.5
        ],
        [
          551.6,
          -322
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          788.2,
          -408.2
        ],
        [
          789.9,
          -411.2
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          752.9,
          -297.8
        ],
        [
          776,
          -381.3
        ],
        [
          781.8,
          -395.7
        ],
        [
          788.2,
          -408.2
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          785.5,
          -407
        ],
        [
          786.5,
          -408.8
        ]
      ]
    },
    {
      "name": "Jalan Perintis Kemerdekaan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          804.9,
          -399.9
        ],
        [
          798,
          -401.9
        ]
      ]
    },
    {
      "name": "Jalan Pegambiran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          952.4,
          84.4
        ],
        [
          949.1,
          99.7
        ]
      ]
    },
    {
      "name": "Jalan Persahabatan Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          953.5,
          102.8
        ],
        [
          948.7,
          102.4
        ]
      ]
    },
    {
      "name": "Jalan Wisma Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          856.8,
          104.6
        ],
        [
          841.3,
          104.5
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Indah 2",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          954.4,
          501.3
        ],
        [
          955,
          507.1
        ]
      ]
    },
    {
      "name": "Jalan Pegambiran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          948.6,
          49.4
        ],
        [
          947.2,
          53.4
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          511,
          9.1
        ],
        [
          499.8,
          16.6
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          337.1,
          -78.2
        ],
        [
          340,
          -72.8
        ]
      ]
    },
    {
      "name": "Jalan Tanah Tinggi I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          334.5,
          -208.9
        ],
        [
          334.7,
          -206.8
        ]
      ]
    },
    {
      "name": "Jalan Tanah Tinggi Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          407.9,
          -318.8
        ],
        [
          408.2,
          -323
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Utara I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          394.7,
          217
        ],
        [
          394.4,
          213.4
        ],
        [
          393.3,
          211.7
        ],
        [
          384.8,
          208.7
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Utara II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          385.4,
          208.1
        ],
        [
          388.9,
          209.6
        ],
        [
          425.7,
          217.4
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Utara II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          380.2,
          204
        ],
        [
          385.4,
          208.1
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Utara II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          374.8,
          197.8
        ],
        [
          380.2,
          204
        ]
      ]
    },
    {
      "name": "Jalan Tambak",
      "type": "primary",
      "width": 18,
      "points": [
        [
          350.5,
          193.7
        ],
        [
          355.6,
          191
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          397.7,
          411.4
        ],
        [
          406.5,
          414.2
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Baru Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          908.6,
          99.8
        ],
        [
          888,
          101.2
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          497.4,
          -297.3
        ],
        [
          472.2,
          -292.9
        ],
        [
          451.4,
          -290.5
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          674.9,
          419.8
        ],
        [
          681.2,
          419
        ],
        [
          689.2,
          419.4
        ]
      ]
    },
    {
      "name": "Jalan Otto Iskandar Dinata",
      "type": "primary",
      "width": 18,
      "points": [
        [
          617,
          433.6
        ],
        [
          612.8,
          425.5
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          609.9,
          416.4
        ],
        [
          607.2,
          407.6
        ]
      ]
    },
    {
      "name": "Jalan Tanah Tinggi Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          413,
          -334.1
        ],
        [
          411.9,
          -308.6
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          504.2,
          -593.9
        ],
        [
          491.5,
          -601
        ]
      ]
    },
    {
      "name": "Jalan Dakota Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          490.8,
          -599.8
        ],
        [
          476.2,
          -607.7
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Baru Tengah Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          696.6,
          230.7
        ],
        [
          700.6,
          230.9
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Baru Tengah Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          700.6,
          230.9
        ],
        [
          713.8,
          230.4
        ]
      ]
    },
    {
      "name": "Jalan Kramat Asem Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          679.4,
          128.5
        ],
        [
          710.2,
          134.2
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          626,
          -205.7
        ],
        [
          646.6,
          -182.8
        ],
        [
          654,
          -164.8
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          583.1,
          -265.8
        ],
        [
          583.6,
          -258.4
        ],
        [
          584.6,
          -255.4
        ],
        [
          614.5,
          -219.1
        ]
      ]
    },
    {
      "name": "Jalan Proklamasi",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          322.9,
          102.8
        ],
        [
          326.9,
          103.4
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          334.2,
          -592.8
        ],
        [
          362,
          -596.8
        ]
      ]
    },
    {
      "name": "Jalan Perintis Kemerdekaan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          809.5,
          -397.5
        ],
        [
          804.9,
          -399.9
        ]
      ]
    },
    {
      "name": "Jalan Perintis Kemerdekaan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          908,
          -341.9
        ],
        [
          960,
          -310.2
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Selatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          751.6,
          -246.4
        ],
        [
          753,
          -264.8
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          648.1,
          -362.8
        ],
        [
          597.3,
          -339.1
        ]
      ]
    },
    {
      "name": "Jalan Profesor Dokter Supomo SH",
      "type": "primary",
      "width": 18,
      "points": [
        [
          333.7,
          507.2
        ],
        [
          317,
          522.2
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          826.9,
          -470.1
        ],
        [
          841.5,
          -494.2
        ]
      ]
    },
    {
      "name": "Jalan Otto Iskandar Dinata",
      "type": "primary",
      "width": 18,
      "points": [
        [
          624.3,
          510.7
        ],
        [
          625,
          522.1
        ]
      ]
    },
    {
      "name": "Jalan Otto Iskandar Dinata",
      "type": "primary",
      "width": 18,
      "points": [
        [
          621.5,
          496
        ],
        [
          621.5,
          453.4
        ],
        [
          617,
          433.6
        ]
      ]
    },
    {
      "name": "Jalan Otto Iskandar Dinata III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          622.8,
          523.8
        ],
        [
          625.2,
          523.7
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          399.2,
          28
        ],
        [
          402.2,
          30.7
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          402.2,
          30.7
        ],
        [
          411.5,
          39.1
        ]
      ]
    },
    {
      "name": "Jalan Otista II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          624.3,
          510.7
        ],
        [
          654.8,
          509.8
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          554.3,
          265.9
        ],
        [
          558,
          268.3
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          782.1,
          -398.4
        ],
        [
          784,
          -402.3
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          344.8,
          -56.9
        ],
        [
          343.3,
          -59.5
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          348.5,
          -49.9
        ],
        [
          344.8,
          -56.9
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          346.1,
          -61.5
        ],
        [
          348,
          -58
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          340,
          -72.8
        ],
        [
          346.1,
          -61.5
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          377.9,
          6.8
        ],
        [
          374.8,
          0.5
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          377.6,
          -1.3
        ],
        [
          380.5,
          3.8
        ]
      ]
    },
    {
      "name": "Jalan Rawamangun",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          473.2,
          -19.8
        ],
        [
          503.6,
          -18.1
        ],
        [
          522.8,
          -15.2
        ]
      ]
    },
    {
      "name": "Jalan Pramuka Jaya Sari",
      "type": "residential",
      "width": 10,
      "points": [
        [
          498.4,
          14.6
        ],
        [
          478.4,
          -12
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          745.1,
          -255.2
        ],
        [
          746,
          -262.6
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          767.9,
          -342.6
        ],
        [
          766.1,
          -336.6
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          752.7,
          -286.4
        ],
        [
          750.5,
          -277.1
        ],
        [
          749.4,
          -264.2
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          744.2,
          -184.9
        ],
        [
          740.7,
          -108.1
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          850.6,
          -504.4
        ],
        [
          818.3,
          -452.6
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          789.9,
          -411.2
        ],
        [
          816.9,
          -453.1
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          816.9,
          -453.1
        ],
        [
          849.3,
          -505.4
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          745.8,
          -235.9
        ],
        [
          744.4,
          -213.3
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          744.4,
          -230.7
        ],
        [
          744.8,
          -236.7
        ]
      ]
    },
    {
      "name": "Jalan Tol Bekasi–Cawang–Kampung Melayu",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          724.9,
          352.2
        ],
        [
          727.9,
          383.4
        ],
        [
          731.6,
          400.3
        ],
        [
          736.7,
          438.8
        ],
        [
          747.7,
          486.6
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Wangi II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          508,
          -375.4
        ],
        [
          476.5,
          -383
        ],
        [
          462.3,
          -385.1
        ]
      ]
    },
    {
      "name": "Jalan Kampung Irian I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          566.5,
          -558.2
        ],
        [
          548.4,
          -528.8
        ]
      ]
    },
    {
      "name": "Jalan Pulo Besar 1",
      "type": "residential",
      "width": 10,
      "points": [
        [
          841.2,
          -566.2
        ],
        [
          849.5,
          -562.6
        ],
        [
          855.9,
          -562
        ],
        [
          857.7,
          -562.1
        ],
        [
          860.1,
          -564.7
        ],
        [
          868.8,
          -564.8
        ],
        [
          877.6,
          -558.7
        ]
      ]
    },
    {
      "name": "Jalan Kwista VI",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          473.2,
          -251.3
        ],
        [
          468.8,
          -251
        ],
        [
          468.4,
          -251.8
        ],
        [
          462.3,
          -253
        ],
        [
          459.5,
          -254.6
        ],
        [
          459,
          -253.3
        ],
        [
          445.2,
          -252.8
        ]
      ]
    },
    {
      "name": "Jalan Tol Sunter–Pulo Gebang",
      "type": "motorway_link",
      "width": 10,
      "points": [
        [
          958.3,
          -609.3
        ],
        [
          960,
          -607.8
        ]
      ]
    },
    {
      "name": "Jalan Kayu Manis Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          587.3,
          139.5
        ],
        [
          586.3,
          137.4
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur IV",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          651.2,
          385.9
        ],
        [
          636.1,
          386.8
        ]
      ]
    },
    {
      "name": "Jalan Kayu Manis Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          500.1,
          17.9
        ],
        [
          507.8,
          34.7
        ],
        [
          515.3,
          57.8
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah IV B",
      "type": "residential",
      "width": 10,
      "points": [
        [
          639,
          -329
        ],
        [
          668.8,
          -343.3
        ]
      ]
    },
    {
      "name": "Jalan Balai Rakyat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          646.1,
          44.4
        ],
        [
          644.8,
          41.2
        ]
      ]
    },
    {
      "name": "Jalan Balai Rakyat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          647.2,
          42.2
        ],
        [
          650.9,
          53
        ]
      ]
    },
    {
      "name": "Jalan Dakota Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          519.7,
          -583.5
        ],
        [
          503.5,
          -592.8
        ]
      ]
    },
    {
      "name": "Jalan Rawasari Selatan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          717.8,
          -136.2
        ],
        [
          687.2,
          -139.4
        ]
      ]
    },
    {
      "name": "Jalan Rawamangun Muka Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          722.8,
          28.1
        ],
        [
          730.5,
          29.1
        ]
      ]
    },
    {
      "name": "Jalan Rawamangun Muka Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          730.5,
          29.1
        ],
        [
          722.6,
          29.1
        ]
      ]
    },
    {
      "name": "Jalan Rawamangun Muka Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          720.3,
          27.8
        ],
        [
          722.8,
          28.1
        ]
      ]
    },
    {
      "name": "Jalan Tebet Dalam IV",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          375.9,
          489.7
        ],
        [
          374.8,
          492.5
        ]
      ]
    },
    {
      "name": "Jalan Kampung Melayu Kecil 2",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          564.3,
          310.4
        ],
        [
          562.9,
          305.8
        ]
      ]
    },
    {
      "name": "Jalan Kebon Nanas",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          767.6,
          524.4
        ],
        [
          804.7,
          526.2
        ]
      ]
    },
    {
      "name": "Jalan Utan Kayu",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          716.7,
          28
        ],
        [
          719.1,
          27.7
        ]
      ]
    },
    {
      "name": "Jalan Utan Kayu",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          719,
          28.8
        ],
        [
          716.7,
          28
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          680.1,
          -41.2
        ],
        [
          664.8,
          -39.9
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          687.8,
          -40.6
        ],
        [
          663.2,
          -38.8
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          677,
          -356.6
        ],
        [
          712.3,
          -372.7
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          772,
          -404.5
        ],
        [
          769.8,
          -404.6
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "primary",
      "width": 18,
      "points": [
        [
          392.7,
          -549.5
        ],
        [
          390.7,
          -552.9
        ],
        [
          391.1,
          -555.9
        ]
      ]
    },
    {
      "name": "Jalan Danau Indah Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          797.9,
          -609.1
        ],
        [
          798.4,
          -586.5
        ]
      ]
    },
    {
      "name": "Jalan Danau Indah Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          796.7,
          -585.7
        ],
        [
          796,
          -615
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          726.3,
          402.4
        ],
        [
          725.1,
          397
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          728.1,
          416.5
        ],
        [
          726.3,
          402.4
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          729.8,
          429.8
        ],
        [
          728.1,
          416.5
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          732.7,
          444.1
        ],
        [
          729.8,
          429.8
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          733.2,
          446.5
        ],
        [
          732.7,
          444.1
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          735.9,
          460.6
        ],
        [
          734.6,
          452.6
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          735.9,
          460.6
        ],
        [
          732.1,
          446.9
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          725,
          395.8
        ],
        [
          723.7,
          380.3
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          744.3,
          482.5
        ],
        [
          754.9,
          524.1
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          718.1,
          176.3
        ],
        [
          723,
          231.6
        ],
        [
          723.6,
          242.6
        ],
        [
          722.5,
          246.2
        ]
      ]
    },
    {
      "name": "Jalan Haji Ung Dalam",
      "type": "residential",
      "width": 10,
      "points": [
        [
          503.4,
          -449.7
        ],
        [
          494.2,
          -450.3
        ],
        [
          493.6,
          -449.3
        ],
        [
          487.7,
          -448.6
        ],
        [
          486.2,
          -445.8
        ],
        [
          485.3,
          -445.7
        ],
        [
          476.5,
          -446.8
        ],
        [
          467.9,
          -451
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Selatan II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          437.6,
          274.6
        ],
        [
          437.9,
          272.6
        ]
      ]
    },
    {
      "name": "Jalan Salemba I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          404.7,
          39.5
        ],
        [
          393.4,
          51.1
        ]
      ]
    },
    {
      "name": "Jalan Ismail Buntu",
      "type": "residential",
      "width": 10,
      "points": [
        [
          465.5,
          426.3
        ],
        [
          466.2,
          421.7
        ],
        [
          497.6,
          421.1
        ]
      ]
    },
    {
      "name": "Jalan Gudang Peluru",
      "type": "residential",
      "width": 10,
      "points": [
        [
          537.5,
          525.4
        ],
        [
          565.6,
          523.9
        ],
        [
          568.1,
          522.8
        ]
      ]
    },
    {
      "name": "Jalan Bentengan Timur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          667.7,
          -611.2
        ],
        [
          663.6,
          -609.4
        ],
        [
          639.7,
          -603.1
        ],
        [
          579.3,
          -592
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          331.2,
          -592
        ],
        [
          333.5,
          -591.6
        ]
      ]
    },
    {
      "name": "Jalan Industri Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          333.6,
          -590.8
        ],
        [
          335.7,
          -591.4
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          331.2,
          -592
        ],
        [
          333.4,
          -592.5
        ]
      ]
    },
    {
      "name": "Jalan Utan Panjang 1",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          390.7,
          -368.2
        ],
        [
          398,
          -376
        ],
        [
          399.5,
          -399.1
        ]
      ]
    },
    {
      "name": "Jalan Matraman Dalam",
      "type": "residential",
      "width": 10,
      "points": [
        [
          458.7,
          122.7
        ],
        [
          459.3,
          133.8
        ],
        [
          458.1,
          139.3
        ],
        [
          452.2,
          150.1
        ],
        [
          446.4,
          155.9
        ],
        [
          440.9,
          159.7
        ]
      ]
    },
    {
      "name": "Jalan Raden Saleh Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          330.3,
          -83.5
        ],
        [
          326.9,
          -81.6
        ]
      ]
    },
    {
      "name": "Jalan Raden Saleh Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          326.9,
          -81.6
        ],
        [
          330,
          -83.9
        ]
      ]
    },
    {
      "name": "Jalan Rawamangun Muka Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          842.8,
          24.8
        ],
        [
          840.4,
          24.9
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          736.1,
          -93.2
        ],
        [
          736.2,
          -97.6
        ]
      ]
    },
    {
      "name": "Jalan Tebet Dalam II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          375.4,
          451.2
        ],
        [
          382.2,
          454.7
        ]
      ]
    },
    {
      "name": "Jalan Mardani",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          554.6,
          -140.6
        ],
        [
          555.7,
          -132.6
        ],
        [
          569.4,
          -111.7
        ],
        [
          573.9,
          -97.6
        ]
      ]
    },
    {
      "name": "Jalan Dakota Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          457.8,
          -505.1
        ],
        [
          463.5,
          -513.5
        ]
      ]
    },
    {
      "name": "Jalan Tanah Tinggi 12",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          350.8,
          -200.8
        ],
        [
          337.9,
          -199.8
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          598.4,
          -33
        ],
        [
          589.8,
          -31.3
        ]
      ]
    },
    {
      "name": "Jalan Siaga",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          497.3,
          43.7
        ],
        [
          501.1,
          51.7
        ],
        [
          509,
          74.5
        ],
        [
          508.9,
          79.6
        ],
        [
          505.2,
          96.8
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          395.8,
          410.6
        ],
        [
          397.7,
          411.4
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          760,
          560
        ],
        [
          757.6,
          549.6
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          757.6,
          549.6
        ],
        [
          747.4,
          507.6
        ]
      ]
    },
    {
      "name": "Jalan Tol Bekasi–Cawang–Kampung Melayu",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          756.5,
          556.6
        ],
        [
          742.7,
          491.9
        ],
        [
          737,
          471
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          738.3,
          -154.7
        ],
        [
          738.2,
          -172.5
        ],
        [
          739.3,
          -185.4
        ]
      ]
    },
    {
      "name": "Jalan Salemba Tengah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          371.5,
          -13.2
        ],
        [
          396.5,
          -20.3
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "primary",
      "width": 18,
      "points": [
        [
          403.6,
          -491.6
        ],
        [
          402.3,
          -495.1
        ],
        [
          402.6,
          -498.3
        ]
      ]
    },
    {
      "name": "Jalan Tebet Dalam I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          397.3,
          414.4
        ],
        [
          390.9,
          414.3
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          707.1,
          -389.2
        ],
        [
          696.9,
          -385.4
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          658.3,
          -367.6
        ],
        [
          648.1,
          -362.8
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          525.4,
          -308.7
        ],
        [
          551.3,
          -320.5
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          497.2,
          -298.1
        ],
        [
          485.3,
          -296
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          406.2,
          -286.6
        ],
        [
          397.7,
          -286.2
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          625.5,
          419.8
        ],
        [
          623,
          424
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          612.8,
          425.5
        ],
        [
          612.1,
          423.5
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          841.5,
          -494.2
        ],
        [
          842.7,
          -495.8
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Jaya I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          875.3,
          386.6
        ],
        [
          898.4,
          331.3
        ]
      ]
    },
    {
      "name": "Jalan Kayu Jati Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          862.2,
          -34.9
        ],
        [
          862.4,
          -26.4
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          896.6,
          -584.2
        ],
        [
          898.1,
          -586.9
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          849.3,
          -505.4
        ],
        [
          896.6,
          -584.2
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          717.7,
          181.1
        ],
        [
          718,
          188.2
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          716.3,
          149.5
        ],
        [
          717.7,
          181.1
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          863.6,
          -526.5
        ],
        [
          859,
          -519.2
        ]
      ]
    },
    {
      "name": "Jalan Pemuda",
      "type": "primary",
      "width": 18,
      "points": [
        [
          890.4,
          -23
        ],
        [
          892.8,
          -22.9
        ]
      ]
    },
    {
      "name": "Jalan Kayu Jati V",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          905.8,
          -79.2
        ],
        [
          906.1,
          -77.1
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          527.9,
          -0.9
        ],
        [
          513.6,
          8.8
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          743.8,
          -204.4
        ],
        [
          743.4,
          -195.3
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          744.4,
          -213.3
        ],
        [
          743.8,
          -204.4
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          735.7,
          455.8
        ],
        [
          733.3,
          444.9
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          733.3,
          444.9
        ],
        [
          728.3,
          414.9
        ],
        [
          724.8,
          381.6
        ],
        [
          722.7,
          349.7
        ],
        [
          720.5,
          290.9
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          711.6,
          135.7
        ],
        [
          709.3,
          125.6
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          750.6,
          519.1
        ],
        [
          749.7,
          515.1
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          749.7,
          515.1
        ],
        [
          735.7,
          455.8
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          751.1,
          514.9
        ],
        [
          752.1,
          518.7
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          740,
          467.6
        ],
        [
          751.1,
          514.9
        ]
      ]
    },
    {
      "name": "Jalan Pulo Mas Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          835.8,
          -241
        ],
        [
          881.9,
          -225.4
        ]
      ]
    },
    {
      "name": "Jalan Tebet Dalam I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          369.6,
          414.7
        ],
        [
          390,
          414.2
        ]
      ]
    },
    {
      "name": "Jalan Media Massa",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          909.6,
          533
        ],
        [
          890,
          519.1
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Latihan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          826.9,
          306.4
        ],
        [
          860.6,
          304.2
        ]
      ]
    },
    {
      "name": "Jalan Angkasa Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          344.4,
          -547.6
        ],
        [
          346.6,
          -548
        ]
      ]
    },
    {
      "name": "Jalan Angkasa Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          347.3,
          -545.6
        ],
        [
          345,
          -545.2
        ]
      ]
    },
    {
      "name": "Jalan Rawamangun Muka Selatan I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          800.7,
          80.2
        ],
        [
          795,
          84
        ],
        [
          770.8,
          83
        ]
      ]
    },
    {
      "name": "Jalan Sunan Giri",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          848.8,
          11.6
        ],
        [
          855.2,
          3.3
        ]
      ]
    },
    {
      "name": "Jalan Sunan Giri",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          855.2,
          3.3
        ],
        [
          851.7,
          8.2
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Indah I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          932.3,
          560
        ],
        [
          937.8,
          552.9
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          499.2,
          15.7
        ],
        [
          510.4,
          8.1
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          394.1,
          96.3
        ],
        [
          391.7,
          97.3
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Utara I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          396.9,
          224.4
        ],
        [
          395.1,
          221.9
        ],
        [
          394.7,
          217
        ]
      ]
    },
    {
      "name": "Jalan Dokter Saharjo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          362.2,
          187.6
        ],
        [
          360.5,
          188.8
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Utara II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          436.5,
          227.2
        ],
        [
          438.1,
          228.6
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Utara I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          402.8,
          231.9
        ],
        [
          396.9,
          224.4
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          434.3,
          65.7
        ],
        [
          432.1,
          67.7
        ]
      ]
    },
    {
      "name": "Jalan Otto Iskandar Dinata",
      "type": "primary",
      "width": 18,
      "points": [
        [
          627.2,
          560
        ],
        [
          622.8,
          523.8
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          597.4,
          421.6
        ],
        [
          601.7,
          421
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          512.8,
          434.8
        ],
        [
          509.9,
          435.1
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          506.5,
          432.3
        ],
        [
          508.7,
          430.5
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          598.8,
          374.6
        ],
        [
          586.2,
          346.7
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          546.8,
          263.1
        ],
        [
          548.8,
          263.3
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          490.8,
          432.9
        ],
        [
          490.3,
          434.3
        ],
        [
          488.4,
          435.8
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          452,
          427.9
        ],
        [
          447.2,
          426.9
        ]
      ]
    },
    {
      "name": "Jalan Tebet Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          497.8,
          453.5
        ],
        [
          453.9,
          475
        ]
      ]
    },
    {
      "name": "Jalan Tebet Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          414.6,
          497
        ],
        [
          411.8,
          498.6
        ]
      ]
    },
    {
      "name": "Jalan Tambak",
      "type": "primary",
      "width": 18,
      "points": [
        [
          362.4,
          163
        ],
        [
          362.7,
          161
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          398,
          -289.2
        ],
        [
          406.7,
          -290.4
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          366,
          -286.7
        ],
        [
          373.1,
          -287.3
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "primary",
      "width": 18,
      "points": [
        [
          334.3,
          198.7
        ],
        [
          340.2,
          200.2
        ],
        [
          347,
          203.2
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          703.7,
          287.9
        ],
        [
          694.1,
          288.3
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          404.3,
          90.2
        ],
        [
          399.9,
          93.1
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          417.2,
          -602.2
        ],
        [
          405.7,
          -600.5
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          412.9,
          -600
        ],
        [
          393.8,
          -597.1
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          393.8,
          -568.8
        ],
        [
          397.2,
          -553.4
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "primary",
      "width": 18,
      "points": [
        [
          393.2,
          -563.5
        ],
        [
          394.7,
          -556.6
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "primary",
      "width": 18,
      "points": [
        [
          395.6,
          -550.1
        ],
        [
          400.1,
          -527
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          397.4,
          -550.6
        ],
        [
          401.7,
          -525.8
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          407,
          -499.7
        ],
        [
          408.3,
          -496.2
        ],
        [
          408.2,
          -491.7
        ]
      ]
    },
    {
      "name": "Jalan Dakota Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          453.8,
          -498.1
        ],
        [
          457.8,
          -505.1
        ]
      ]
    },
    {
      "name": "Jalan Dakota Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          503.5,
          -592.8
        ],
        [
          490.8,
          -599.8
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          480,
          -610.1
        ],
        [
          486.7,
          -605.7
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          486.7,
          -605.7
        ],
        [
          492.7,
          -602.2
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          520.8,
          -587.1
        ],
        [
          522.5,
          -585.4
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          527.7,
          -583
        ],
        [
          552.7,
          -568.7
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          343.8,
          -282.3
        ],
        [
          340.9,
          -282.7
        ]
      ]
    },
    {
      "name": "Jalan Menteng Pulo",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          317,
          374.2
        ],
        [
          323.4,
          370
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Timur Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          327.2,
          -343.5
        ],
        [
          325.5,
          -338.4
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "primary",
      "width": 18,
      "points": [
        [
          317.4,
          193.4
        ],
        [
          323.4,
          195.6
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "primary",
      "width": 18,
      "points": [
        [
          323.4,
          195.6
        ],
        [
          325.7,
          197.3
        ]
      ]
    },
    {
      "name": "Jalan Dokter Saharjo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          347,
          203.2
        ],
        [
          346,
          205.4
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          625.7,
          417.7
        ],
        [
          625.5,
          419.8
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          627,
          417.4
        ],
        [
          625.5,
          419.8
        ]
      ]
    },
    {
      "name": "Jalan Otto Iskandar Dinata",
      "type": "primary",
      "width": 18,
      "points": [
        [
          622.7,
          522.2
        ],
        [
          621.5,
          496
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          631.4,
          409.7
        ],
        [
          629.1,
          413.9
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          711.8,
          75.6
        ],
        [
          709.9,
          86.5
        ],
        [
          709.1,
          103.6
        ],
        [
          710.5,
          117.6
        ],
        [
          717.6,
          155.9
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          712.3,
          118.5
        ],
        [
          717.3,
          147.2
        ]
      ]
    },
    {
      "name": "Jalan Otto Iskandar Dinata",
      "type": "primary",
      "width": 18,
      "points": [
        [
          620,
          435.2
        ],
        [
          620.9,
          439.1
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          740.7,
          480.2
        ],
        [
          737.8,
          468.1
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          737.8,
          468.1
        ],
        [
          735.9,
          460.6
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          734.6,
          452.6
        ],
        [
          733.2,
          446.5
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          729.7,
          406.4
        ],
        [
          732.8,
          430.5
        ],
        [
          737.4,
          452.2
        ]
      ]
    },
    {
      "name": "Jalan Paus",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          959.9,
          23.5
        ],
        [
          960,
          7.8
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "primary",
      "width": 18,
      "points": [
        [
          383.3,
          -604.4
        ],
        [
          381.4,
          -615
        ]
      ]
    },
    {
      "name": "Jalan Pesanggrahan Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          381.7,
          -602.1
        ],
        [
          380.4,
          -609.3
        ]
      ]
    },
    {
      "name": "Jalan Pemuda",
      "type": "primary",
      "width": 18,
      "points": [
        [
          739.8,
          -35
        ],
        [
          736.5,
          -35.4
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          717.6,
          155.9
        ],
        [
          718.1,
          176.3
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          737.4,
          452.2
        ],
        [
          744.3,
          482.5
        ]
      ]
    },
    {
      "name": "Jalan Kramat Sentiong",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          397,
          -120.7
        ],
        [
          399.3,
          -122
        ]
      ]
    },
    {
      "name": "Jalan Percetakan Negara 2",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          467.4,
          -194
        ],
        [
          465.8,
          -172.5
        ],
        [
          465.3,
          -151.5
        ]
      ]
    },
    {
      "name": "Jalan Rawa Selatan IV",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          441.3,
          -191.2
        ],
        [
          451.4,
          -191.6
        ],
        [
          467.4,
          -194
        ]
      ]
    },
    {
      "name": "Jalan Mardani",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          520.2,
          -194.5
        ],
        [
          534.9,
          -195.9
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          516.7,
          -268
        ],
        [
          518.2,
          -267.2
        ],
        [
          532,
          -267
        ]
      ]
    },
    {
      "name": "Jalan Bangunan Timur",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          923.7,
          -82.4
        ],
        [
          905.7,
          -79.7
        ]
      ]
    },
    {
      "name": "Jalan Balai Pustaka Baru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          891,
          -20.1
        ],
        [
          890.4,
          -9.7
        ]
      ]
    },
    {
      "name": "Jalan Balai Pustaka Baru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          889,
          -9.7
        ],
        [
          889.3,
          -20.2
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          332.7,
          -281.3
        ],
        [
          326.7,
          -280.9
        ]
      ]
    },
    {
      "name": "Jalan Angsana",
      "type": "residential",
      "width": 10,
      "points": [
        [
          386.4,
          -328.3
        ],
        [
          386,
          -358.9
        ]
      ]
    },
    {
      "name": "Jalan Tambak",
      "type": "primary",
      "width": 18,
      "points": [
        [
          375.1,
          108
        ],
        [
          373.5,
          110.9
        ],
        [
          371.2,
          124.5
        ]
      ]
    },
    {
      "name": "Jalan Tangguh Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          818.7,
          -427.8
        ],
        [
          835.8,
          -456.7
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          721.3,
          340.4
        ],
        [
          720.1,
          329.1
        ]
      ]
    },
    {
      "name": "Jalan Donald Isaac Panjaitan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          740.6,
          286.3
        ],
        [
          742.5,
          312.4
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Timur VI",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          772,
          343.8
        ],
        [
          775.1,
          338.3
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Jaya Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          881.9,
          391.2
        ],
        [
          856.5,
          451.1
        ]
      ]
    },
    {
      "name": "Jalan Donald Isaac Panjaitan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          740.6,
          286.3
        ],
        [
          740.5,
          283.8
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          726.1,
          330.8
        ],
        [
          725.4,
          339.7
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Jaya Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          884.4,
          385.2
        ],
        [
          881.9,
          391.2
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          636.1,
          386.8
        ],
        [
          635.3,
          401.5
        ],
        [
          631.4,
          409.7
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          548.8,
          263.3
        ],
        [
          554.1,
          265.6
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          431.3,
          -602.8
        ],
        [
          412.9,
          -600
        ]
      ]
    },
    {
      "name": "Jalan Convair",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          425.2,
          -600
        ],
        [
          426.5,
          -591.6
        ]
      ]
    },
    {
      "name": "Jalan Convair",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          426.5,
          -591.6
        ],
        [
          428.4,
          -581.1
        ]
      ]
    },
    {
      "name": "Jalan Convair",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          430.7,
          -563.6
        ],
        [
          427.3,
          -580.9
        ]
      ]
    },
    {
      "name": "Jalan Damar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          422.7,
          -615
        ],
        [
          423.8,
          -608.9
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          430.1,
          -607.7
        ],
        [
          454.7,
          -611.4
        ],
        [
          460.1,
          -611.3
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          752.1,
          518.7
        ],
        [
          756.9,
          538.5
        ]
      ]
    },
    {
      "name": "Jalan Tol Insinyur Wiyoto Wiyono",
      "type": "motorway",
      "width": 18,
      "points": [
        [
          752.2,
          525.3
        ],
        [
          750.6,
          519.1
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          950.4,
          488.3
        ],
        [
          942.8,
          488.5
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          738.8,
          424
        ],
        [
          733.7,
          425.2
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          710.7,
          287.8
        ],
        [
          707.7,
          287.9
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          714.8,
          287.6
        ],
        [
          710.7,
          287.8
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          716.9,
          287.5
        ],
        [
          714.8,
          287.6
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          736.6,
          286.6
        ],
        [
          716.9,
          287.5
        ]
      ]
    },
    {
      "name": "Jalan Dokter Saharjo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          345.7,
          407
        ],
        [
          344.2,
          421.1
        ],
        [
          345.1,
          444.8
        ],
        [
          344.3,
          464.9
        ]
      ]
    },
    {
      "name": "Jalan Dokter Saharjo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          345.7,
          404.4
        ],
        [
          345.7,
          407
        ]
      ]
    },
    {
      "name": "Jalan Dokter Saharjo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          343.2,
          415.8
        ],
        [
          344.6,
          407.1
        ]
      ]
    },
    {
      "name": "Jalan Dokter Saharjo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          344.6,
          407.1
        ],
        [
          344.7,
          404.4
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Baru Selatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          713.1,
          280.3
        ],
        [
          716.5,
          280.2
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Lama Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          725,
          280
        ],
        [
          716.5,
          280.2
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          784,
          -406.7
        ],
        [
          786.2,
          -406.6
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          784.3,
          -403.5
        ],
        [
          781.9,
          -403.7
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          702,
          -43.9
        ],
        [
          724.5,
          -41.1
        ],
        [
          726.7,
          -39.8
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          726.8,
          419.4
        ],
        [
          726.3,
          415.8
        ]
      ]
    },
    {
      "name": "Jalan Proklamasi",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          320.1,
          101.7
        ],
        [
          322.9,
          102.8
        ]
      ]
    },
    {
      "name": "Jalan Proklamasi",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          326.6,
          105.2
        ],
        [
          324.6,
          106.6
        ]
      ]
    },
    {
      "name": "Jalan Sunter Jaya 1",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          535.3,
          -597.7
        ],
        [
          538.2,
          -607.4
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          552.7,
          -568.7
        ],
        [
          560.5,
          -564.3
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          560.5,
          -564.3
        ],
        [
          565.7,
          -561.6
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          820.4,
          -461.7
        ],
        [
          822.6,
          -463.2
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          565.7,
          -561.6
        ],
        [
          575.4,
          -556.4
        ]
      ]
    },
    {
      "name": "Jalan Kemayoran Gempol",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          453.9,
          -490.3
        ],
        [
          440.3,
          -467.8
        ]
      ]
    },
    {
      "name": "Jalan Kemayoran Gempol",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          422.1,
          -446.4
        ],
        [
          424,
          -448.4
        ],
        [
          431.7,
          -461.2
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Diponegoro",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          357.9,
          26
        ],
        [
          368.8,
          14.3
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Barat",
      "type": "living_street",
      "width": 8,
      "points": [
        [
          532.4,
          -243
        ],
        [
          556.9,
          -212.8
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Timur Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          324.3,
          -330.1
        ],
        [
          317,
          -285.5
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Timur Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          329,
          -345.4
        ],
        [
          327.2,
          -343.5
        ]
      ]
    },
    {
      "name": "Jalan Perintis Kemerdekaan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          893.9,
          -350.3
        ],
        [
          908,
          -341.9
        ]
      ]
    },
    {
      "name": "Jalan Balap Sepeda",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          959.7,
          -76.5
        ],
        [
          959.3,
          -86.2
        ]
      ]
    },
    {
      "name": "Jalan Tanah Mas Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          923.1,
          -141.9
        ],
        [
          901,
          -149.9
        ]
      ]
    },
    {
      "name": "Jalan Bangunan Timur",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          934.5,
          -84.2
        ],
        [
          923.7,
          -82.4
        ]
      ]
    },
    {
      "name": "Jalan Bangunan Barat",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          875.9,
          -75.6
        ],
        [
          861.3,
          -73.8
        ]
      ]
    },
    {
      "name": "Jalan Bangunan Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          819.4,
          -152.9
        ],
        [
          817.3,
          -136.1
        ]
      ]
    },
    {
      "name": "Jalan Bangunan Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          817.3,
          -136.1
        ],
        [
          816.6,
          -130.9
        ]
      ]
    },
    {
      "name": "Jalan Pondasi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          875.9,
          -75.6
        ],
        [
          871,
          -116.7
        ]
      ]
    },
    {
      "name": "Jalan Tanah Mas Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          901.2,
          -152.2
        ],
        [
          903,
          -150.7
        ],
        [
          922.1,
          -143.6
        ]
      ]
    },
    {
      "name": "Jalan Pemuda",
      "type": "primary",
      "width": 18,
      "points": [
        [
          862.5,
          -24.8
        ],
        [
          886.1,
          -23.2
        ]
      ]
    },
    {
      "name": "Jalan Pemuda",
      "type": "primary",
      "width": 18,
      "points": [
        [
          887.4,
          -20.3
        ],
        [
          863.3,
          -22.1
        ]
      ]
    },
    {
      "name": "Jalan Pegambiran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          947.2,
          53.4
        ],
        [
          946.8,
          61.5
        ]
      ]
    },
    {
      "name": "Jalan Pegambiran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          945.5,
          61.7
        ],
        [
          945.8,
          55
        ],
        [
          947.9,
          47.6
        ]
      ]
    },
    {
      "name": "Jalan Pinang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          918.5,
          43.7
        ],
        [
          913.3,
          43.8
        ]
      ]
    },
    {
      "name": "Jalan Balai Pustaka Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          889.7,
          23.5
        ],
        [
          889,
          42.7
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          717.3,
          147.2
        ],
        [
          717.6,
          155.9
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          724.5,
          290.8
        ],
        [
          725.5,
          309
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Barat Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          707.7,
          287.9
        ],
        [
          704.8,
          287.9
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          715.5,
          228.9
        ],
        [
          714.5,
          226
        ],
        [
          714.2,
          209.9
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          514.8,
          197.8
        ],
        [
          524.9,
          222.8
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          434.8,
          65.2
        ],
        [
          463.2,
          94.1
        ],
        [
          465.1,
          95
        ],
        [
          468.6,
          95.1
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Diponegoro",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          368.8,
          14.3
        ],
        [
          374.1,
          8.8
        ],
        [
          377.9,
          6.8
        ]
      ]
    },
    {
      "name": "Jalan Angkasa Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          340,
          -544
        ],
        [
          337.9,
          -543.5
        ]
      ]
    },
    {
      "name": "Jalan Kemayoran Gempol",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          368,
          -485.9
        ],
        [
          365.4,
          -487
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          558.1,
          427.5
        ],
        [
          569.2,
          426.7
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          544.6,
          428.2
        ],
        [
          558.1,
          427.5
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          543,
          427.4
        ],
        [
          559.6,
          426.5
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          629.1,
          413.9
        ],
        [
          627,
          417.4
        ]
      ]
    },
    {
      "name": "Jalan Sunter Kemayoran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          492.7,
          -602.2
        ],
        [
          498.6,
          -599.1
        ]
      ]
    },
    {
      "name": "Jalan Otto Iskandar Dinata III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          749.8,
          523.1
        ],
        [
          744,
          523.4
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Abdul Syafi'ie",
      "type": "primary",
      "width": 18,
      "points": [
        [
          601.7,
          421
        ],
        [
          605.3,
          420.3
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          546.6,
          261.7
        ],
        [
          548.8,
          263.3
        ]
      ]
    },
    {
      "name": "Jalan Matraman Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          534,
          243.7
        ],
        [
          539.2,
          253.8
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          902.1,
          -597.9
        ],
        [
          903.6,
          -600.3
        ]
      ]
    },
    {
      "name": "Jalan Kebon Sereh Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          713.8,
          230.4
        ],
        [
          714.2,
          240.1
        ]
      ]
    },
    {
      "name": "Jalan Pisangan Baru Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          698.5,
          277.5
        ],
        [
          698.1,
          265.9
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          771.1,
          425.3
        ],
        [
          765.7,
          422.4
        ]
      ]
    },
    {
      "name": "Jalan Pramuka Jati",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          434.8,
          -29.1
        ],
        [
          436,
          -28.2
        ],
        [
          443.2,
          -28.2
        ]
      ]
    },
    {
      "name": "Jalan Percetakan Negara",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          535.3,
          -85.2
        ],
        [
          524.5,
          -83.1
        ],
        [
          519,
          -80.4
        ],
        [
          442.7,
          -31.7
        ]
      ]
    },
    {
      "name": "Jalan Kramat Pulo Gundul",
      "type": "residential",
      "width": 10,
      "points": [
        [
          366.8,
          -160.7
        ],
        [
          372.9,
          -164.6
        ],
        [
          372.7,
          -167
        ],
        [
          368.7,
          -173.6
        ],
        [
          357.5,
          -188.4
        ],
        [
          355.3,
          -190.1
        ],
        [
          353.4,
          -199.8
        ],
        [
          347,
          -199.4
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          469.6,
          38
        ],
        [
          450.5,
          52.6
        ]
      ]
    },
    {
      "name": "Jalan Tegalan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          481.8,
          107.4
        ],
        [
          479.8,
          108.7
        ]
      ]
    },
    {
      "name": "Jalan Tegalan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          479.4,
          108.1
        ],
        [
          481.8,
          107.4
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          450.5,
          52.6
        ],
        [
          448.5,
          54.1
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          529.8,
          -2.1
        ],
        [
          527.9,
          -0.9
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Tengah XXX",
      "type": "unclassified",
      "width": 10,
      "points": [
        [
          715.7,
          -324.3
        ],
        [
          702.5,
          -325.2
        ],
        [
          695.9,
          -326.9
        ],
        [
          692.1,
          -328.8
        ],
        [
          688.5,
          -332
        ],
        [
          684,
          -339.5
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          745.1,
          -255.2
        ],
        [
          738.4,
          -256.7
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Putih Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          708.2,
          -388.5
        ],
        [
          712.1,
          -378.4
        ]
      ]
    },
    {
      "name": "Jalan Balai Rakyat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          648.2,
          52.5
        ],
        [
          646.1,
          44.4
        ]
      ]
    },
    {
      "name": "Jalan Serdang Baru",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          556.9,
          -563.5
        ],
        [
          551.8,
          -566.2
        ]
      ]
    },
    {
      "name": "Jalan Manggarai Utara I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          384.8,
          208.7
        ],
        [
          380.8,
          205.6
        ]
      ]
    },
    {
      "name": "Jalan Danau Indah Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          797.8,
          -615
        ],
        [
          797.9,
          -609.1
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Mas Tengah",
      "type": "unclassified",
      "width": 10,
      "points": [
        [
          726.3,
          -410.8
        ],
        [
          731.1,
          -427.1
        ],
        [
          735.8,
          -434.3
        ],
        [
          741.3,
          -451.3
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          740.7,
          -108.1
        ],
        [
          740.6,
          -105.2
        ]
      ]
    },
    {
      "name": "Jalan Bukit Duri Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          418.5,
          340.8
        ],
        [
          425,
          335.5
        ]
      ]
    },
    {
      "name": "Jalan Rawasari Selatan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          736.2,
          -97.6
        ],
        [
          728.8,
          -101.8
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          736.2,
          -97.6
        ],
        [
          736.3,
          -101.3
        ]
      ]
    },
    {
      "name": "Jalan Rawasari Barat I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          661.3,
          -145.4
        ],
        [
          662.4,
          -140.6
        ],
        [
          665.8,
          -132.3
        ]
      ]
    },
    {
      "name": "Jalan Percetakan Negara",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          660.5,
          -120.5
        ],
        [
          658.7,
          -113.6
        ]
      ]
    },
    {
      "name": "Jalan Percetakan Negara",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          661.6,
          -124.6
        ],
        [
          660.5,
          -120.5
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          735.5,
          -40.9
        ],
        [
          735.2,
          -38.8
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          731.7,
          -39.3
        ],
        [
          732.1,
          -41.3
        ]
      ]
    },
    {
      "name": "Jalan Proklamasi",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          324.6,
          106.6
        ],
        [
          317,
          115.7
        ]
      ]
    },
    {
      "name": "Jalan Proklamasi",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          329.7,
          104.7
        ],
        [
          327,
          105
        ]
      ]
    },
    {
      "name": "Jalan Salemba Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          362.8,
          -29.8
        ],
        [
          371.5,
          -13.2
        ]
      ]
    },
    {
      "name": "Jalan Bukit Tinggi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          327.1,
          217.1
        ],
        [
          329.2,
          218.6
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          336.5,
          -281.6
        ],
        [
          332.7,
          -281.3
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          695.5,
          422.1
        ],
        [
          689.9,
          421.3
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          689.2,
          419.4
        ],
        [
          695.8,
          420.9
        ]
      ]
    },
    {
      "name": "Jalan Biduri Pandan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          410.8,
          -278.9
        ],
        [
          411.2,
          -277.7
        ],
        [
          432.8,
          -277.9
        ],
        [
          437.4,
          -276.8
        ],
        [
          443.1,
          -276.9
        ]
      ]
    },
    {
      "name": "Jalan Sunter Bendungan Jago",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          551.8,
          -566.2
        ],
        [
          537.8,
          -565
        ]
      ]
    },
    {
      "name": "Jalan Perintis Kemerdekaan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          844.8,
          -380.9
        ],
        [
          893.9,
          -350.3
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          913.2,
          -604.9
        ],
        [
          904.3,
          -590
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          822.6,
          -463.2
        ],
        [
          826.9,
          -470.1
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          891.6,
          -578.8
        ],
        [
          898.5,
          -591.3
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          833.4,
          -474.4
        ],
        [
          829.1,
          -467.4
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          829.1,
          -467.4
        ],
        [
          825.4,
          -461.5
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          790.4,
          -408.1
        ],
        [
          789.3,
          -406
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          787.3,
          -408.5
        ],
        [
          788.9,
          -411.3
        ]
      ]
    },
    {
      "name": "Jalan Yos Sudarso",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          788.9,
          -411.3
        ],
        [
          796.9,
          -423.7
        ]
      ]
    },
    {
      "name": "Jalan D. I. Panjaitan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          728.5,
          432.7
        ],
        [
          728.1,
          428.5
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          586.8,
          -337.1
        ],
        [
          591,
          -339.1
        ]
      ]
    },
    {
      "name": "Jalan Letnan Jenderal Suprapto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          573.2,
          -330.8
        ],
        [
          586.8,
          -337.1
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          571.3,
          -29.2
        ],
        [
          576.6,
          -31
        ]
      ]
    },
    {
      "name": "Jalan Kramat Pulo Gundul",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          362.8,
          -166.1
        ],
        [
          338.7,
          -198.4
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          397.2,
          -553.4
        ],
        [
          397.4,
          -550.6
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          401.7,
          -525.8
        ],
        [
          404,
          -513.5
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "primary",
      "width": 18,
      "points": [
        [
          403.4,
          -507.4
        ],
        [
          405.5,
          -498.8
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "primary",
      "width": 18,
      "points": [
        [
          396,
          -534.6
        ],
        [
          392.7,
          -549.5
        ]
      ]
    },
    {
      "name": "Jalan Benyamin Sueb",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          393.5,
          -538.8
        ],
        [
          392.3,
          -547
        ],
        [
          390.3,
          -551.2
        ]
      ]
    },
    {
      "name": "Jalan Haji Bagindo Rajo Motik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          324.4,
          -586.5
        ],
        [
          317,
          -584.8
        ]
      ]
    },
    {
      "name": "Jalan Perintis Kemerdekaan",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          944.9,
          -315.3
        ],
        [
          933.7,
          -322.1
        ]
      ]
    },
    {
      "name": "Jalan Raya Kayu Putih",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          959.2,
          -114.9
        ],
        [
          960,
          -140.6
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          664.5,
          -41.9
        ],
        [
          680.1,
          -43.4
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          689.7,
          -41.6
        ],
        [
          680.1,
          -41.2
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          510.4,
          8.1
        ],
        [
          515.2,
          4.8
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          516,
          5.8
        ],
        [
          511,
          9.1
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          372.4,
          107.7
        ],
        [
          376.6,
          104.8
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          389.4,
          96.5
        ],
        [
          393.4,
          94.4
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          527.4,
          -1.6
        ],
        [
          517.8,
          4.5
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          518.1,
          2.7
        ],
        [
          526.3,
          -3.3
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          515.2,
          4.8
        ],
        [
          518.1,
          2.7
        ]
      ]
    },
    {
      "name": "Jalan Pramuka",
      "type": "primary",
      "width": 18,
      "points": [
        [
          517.8,
          4.5
        ],
        [
          516,
          5.8
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Ahmad Yani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          746,
          -262.6
        ],
        [
          747.9,
          -277.3
        ]
      ]
    }
  ],
  "waterways": [
    {
      "name": "Kanal Banjir Barat",
      "type": "river",
      "width": 14,
      "points": [
        [
          352.1,
          186.6
        ],
        [
          344.5,
          191.5
        ],
        [
          337.3,
          193.7
        ],
        [
          330.8,
          193.6
        ],
        [
          317,
          189.7
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          514.2,
          -572.2
        ],
        [
          522.8,
          -582.2
        ],
        [
          526.4,
          -584.4
        ],
        [
          533.3,
          -597.2
        ],
        [
          538.1,
          -615
        ]
      ]
    },
    {
      "name": "Ci Pinang",
      "type": "river",
      "width": 14,
      "points": [
        [
          776.4,
          560
        ],
        [
          767.3,
          528.1
        ],
        [
          765.3,
          517.5
        ],
        [
          763.4,
          512.7
        ],
        [
          763.2,
          507.7
        ],
        [
          764.7,
          504
        ],
        [
          779.8,
          484.6
        ],
        [
          776.2,
          483.4
        ],
        [
          772.4,
          483.2
        ],
        [
          765.5,
          478.9
        ],
        [
          762.4,
          479.7
        ],
        [
          757.7,
          477.4
        ],
        [
          757.7,
          474.5
        ],
        [
          758.7,
          472.5
        ],
        [
          763.7,
          470.8
        ],
        [
          767.4,
          470.7
        ],
        [
          768.8,
          469.6
        ],
        [
          760.7,
          462
        ],
        [
          758.7,
          462.8
        ],
        [
          758.1,
          464.8
        ],
        [
          755.1,
          465.5
        ],
        [
          751.6,
          446.2
        ],
        [
          753.4,
          432.2
        ],
        [
          754.8,
          429.8
        ],
        [
          760.3,
          427.6
        ],
        [
          763.3,
          425.2
        ],
        [
          766.6,
          418
        ],
        [
          765.7,
          412.4
        ],
        [
          767.4,
          405.6
        ],
        [
          775.3,
          401.3
        ],
        [
          780.6,
          394.7
        ],
        [
          782.9,
          394.5
        ],
        [
          786.3,
          396.2
        ],
        [
          790.6,
          402.5
        ],
        [
          799.8,
          403.1
        ],
        [
          800.1,
          396.3
        ],
        [
          809.2,
          389.3
        ],
        [
          815.5,
          386.3
        ],
        [
          817.3,
          377.3
        ],
        [
          816.7,
          368.8
        ],
        [
          819.1,
          363.4
        ],
        [
          829,
          365.3
        ],
        [
          831.5,
          362.4
        ],
        [
          831.8,
          356.6
        ],
        [
          833.2,
          355.8
        ],
        [
          836.1,
          354.8
        ],
        [
          837.7,
          355.4
        ],
        [
          851.4,
          353.7
        ],
        [
          855.5,
          356.8
        ],
        [
          856.3,
          356.7
        ],
        [
          857.1,
          350.9
        ],
        [
          858.2,
          350
        ],
        [
          860.2,
          350
        ],
        [
          865.7,
          352.4
        ],
        [
          868.2,
          356.5
        ],
        [
          870.3,
          358.2
        ],
        [
          878.1,
          357.1
        ],
        [
          878.8,
          350.7
        ],
        [
          884.1,
          343.9
        ],
        [
          881.7,
          338
        ],
        [
          882.5,
          334.2
        ],
        [
          881.2,
          329
        ],
        [
          886.1,
          325.3
        ],
        [
          906.5,
          321.2
        ],
        [
          911.5,
          317.7
        ],
        [
          914.2,
          312.7
        ],
        [
          916.2,
          311.2
        ],
        [
          924.5,
          310.4
        ],
        [
          932.7,
          313.3
        ],
        [
          937,
          313.3
        ],
        [
          947.2,
          315.3
        ],
        [
          954.1,
          311.6
        ],
        [
          960,
          307.1
        ]
      ]
    },
    {
      "name": null,
      "type": "canal",
      "width": 12,
      "points": [
        [
          317,
          193
        ],
        [
          317.9,
          190.1
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          751.4,
          -263.9
        ],
        [
          747,
          -204.6
        ],
        [
          740.7,
          -73.4
        ],
        [
          743,
          -63.9
        ],
        [
          745.7,
          -59.2
        ],
        [
          753,
          -50.8
        ],
        [
          757.9,
          -43.6
        ],
        [
          762.1,
          -38.7
        ],
        [
          769.4,
          -35.9
        ],
        [
          774.4,
          -35.9
        ],
        [
          779.7,
          -34.3
        ],
        [
          780,
          -33.2
        ],
        [
          801.5,
          -30.4
        ],
        [
          822.7,
          -26.5
        ],
        [
          858.5,
          -22.6
        ],
        [
          879.9,
          -21.4
        ],
        [
          960,
          -20.5
        ]
      ]
    },
    {
      "name": "Kali Utan Kayu",
      "type": "river",
      "width": 14,
      "points": [
        [
          658.4,
          238.1
        ],
        [
          649.7,
          240.3
        ],
        [
          641.7,
          240
        ],
        [
          632.2,
          240.9
        ],
        [
          621.5,
          233.6
        ],
        [
          618.1,
          232.5
        ],
        [
          615.6,
          219.8
        ],
        [
          610.2,
          201.8
        ],
        [
          611.8,
          200.8
        ]
      ]
    },
    {
      "name": "Ci Liwung",
      "type": "river",
      "width": 14,
      "points": [
        [
          610.5,
          560
        ],
        [
          608.6,
          553
        ],
        [
          601.2,
          540.1
        ],
        [
          591.9,
          527.4
        ],
        [
          569.9,
          514.3
        ],
        [
          568.1,
          510.5
        ],
        [
          567.9,
          507.8
        ],
        [
          574.8,
          495.1
        ],
        [
          583.3,
          486.3
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          960,
          527.1
        ],
        [
          953.2,
          521.3
        ],
        [
          950.8,
          517.1
        ],
        [
          945.3,
          513.6
        ],
        [
          944.4,
          502
        ],
        [
          945,
          496
        ],
        [
          944.5,
          491.6
        ],
        [
          948.8,
          484.4
        ],
        [
          954.1,
          481.4
        ],
        [
          955.1,
          479.5
        ],
        [
          960,
          477.8
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          497,
          40
        ],
        [
          490.5,
          25.6
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          485.8,
          21.9
        ],
        [
          478.5,
          17.7
        ],
        [
          462.5,
          12.2
        ],
        [
          460.3,
          12.2
        ],
        [
          450.7,
          9.3
        ],
        [
          405.9,
          -7.5
        ],
        [
          395.4,
          -23.7
        ],
        [
          393.2,
          -28.4
        ],
        [
          391.9,
          -29.9
        ],
        [
          386.4,
          -32.9
        ],
        [
          384.4,
          -37.7
        ],
        [
          379.9,
          -41.2
        ],
        [
          377.6,
          -45.3
        ],
        [
          374,
          -49.4
        ],
        [
          373.6,
          -51.6
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          616.5,
          288.6
        ],
        [
          615.2,
          286.4
        ],
        [
          610.9,
          286
        ],
        [
          606.9,
          284.2
        ],
        [
          601.8,
          276.7
        ],
        [
          578.9,
          253.7
        ]
      ]
    },
    {
      "name": "Ci Liwung",
      "type": "river",
      "width": 14,
      "points": [
        [
          583.3,
          486.3
        ],
        [
          589.8,
          477.8
        ],
        [
          588.2,
          451.6
        ],
        [
          575.1,
          431.4
        ],
        [
          571.9,
          423
        ],
        [
          572.7,
          419.7
        ],
        [
          574.3,
          419
        ],
        [
          585.6,
          419.3
        ],
        [
          593.5,
          417.6
        ],
        [
          595.5,
          416.1
        ],
        [
          597.5,
          409.9
        ],
        [
          596,
          403
        ],
        [
          582.9,
          388.7
        ],
        [
          572.7,
          375.1
        ],
        [
          570.5,
          371.3
        ],
        [
          566.6,
          358.3
        ],
        [
          564.4,
          354.5
        ],
        [
          561,
          351.8
        ],
        [
          553.4,
          351.1
        ],
        [
          548.3,
          352.3
        ],
        [
          545.3,
          354.7
        ],
        [
          543.4,
          358.1
        ],
        [
          543.1,
          362
        ],
        [
          546.7,
          367.4
        ],
        [
          547.3,
          371.2
        ],
        [
          545.9,
          375.2
        ],
        [
          543.7,
          377.7
        ],
        [
          535.5,
          379.4
        ],
        [
          533.6,
          379.1
        ],
        [
          526.5,
          377
        ],
        [
          524.2,
          375.4
        ],
        [
          523.3,
          372.7
        ],
        [
          523.6,
          369.7
        ],
        [
          530.6,
          357.2
        ],
        [
          534.4,
          348.6
        ],
        [
          548.7,
          330.1
        ],
        [
          553.6,
          321.3
        ],
        [
          568.1,
          310.5
        ],
        [
          570.2,
          307.3
        ],
        [
          570.8,
          304.2
        ],
        [
          569.9,
          301.9
        ],
        [
          566.4,
          299.9
        ],
        [
          560.6,
          301.2
        ],
        [
          549,
          306.7
        ],
        [
          531.7,
          316.6
        ],
        [
          527.1,
          317.6
        ],
        [
          521.5,
          317
        ],
        [
          508.6,
          304.6
        ],
        [
          506.2,
          303.1
        ],
        [
          502.7,
          302.6
        ],
        [
          500.7,
          303.7
        ],
        [
          494.1,
          311.3
        ],
        [
          490.8,
          320.3
        ],
        [
          489.5,
          321.5
        ],
        [
          484.8,
          322
        ],
        [
          478,
          317.4
        ],
        [
          468.7,
          303.4
        ],
        [
          469.5,
          297.1
        ],
        [
          473.2,
          285.3
        ],
        [
          476.9,
          277.8
        ],
        [
          480.8,
          272.1
        ],
        [
          486.7,
          266.3
        ],
        [
          492.7,
          266.1
        ],
        [
          497.3,
          263.8
        ],
        [
          497.4,
          260.7
        ],
        [
          490.3,
          252.3
        ],
        [
          487.2,
          246.8
        ],
        [
          485.2,
          244.5
        ],
        [
          477.2,
          238.6
        ],
        [
          452,
          232.9
        ],
        [
          441.6,
          228.2
        ],
        [
          439.1,
          222.7
        ],
        [
          428.7,
          213.9
        ],
        [
          418.9,
          207
        ],
        [
          413.4,
          204.6
        ],
        [
          398.2,
          200.1
        ],
        [
          391.1,
          195.7
        ],
        [
          378.5,
          184.4
        ],
        [
          367.7,
          178.4
        ],
        [
          370.8,
          161.7
        ],
        [
          373,
          155.8
        ],
        [
          377.1,
          151.1
        ],
        [
          381.3,
          149.6
        ],
        [
          386.1,
          149
        ],
        [
          394.8,
          154.2
        ],
        [
          402.9,
          155.3
        ],
        [
          416.5,
          154.4
        ],
        [
          419.3,
          155.3
        ],
        [
          427.2,
          162.9
        ],
        [
          430.4,
          164.1
        ],
        [
          434.2,
          163.9
        ],
        [
          441.2,
          161.7
        ],
        [
          446,
          158.5
        ],
        [
          452.8,
          152.4
        ],
        [
          457.9,
          143.5
        ],
        [
          461.6,
          134.5
        ],
        [
          461,
          120.1
        ],
        [
          459.4,
          113.8
        ],
        [
          456.8,
          109.1
        ],
        [
          453.7,
          106.1
        ],
        [
          451.2,
          105
        ],
        [
          437.2,
          103.3
        ],
        [
          419.8,
          97.9
        ],
        [
          416.2,
          98.6
        ],
        [
          406.2,
          105.2
        ],
        [
          403.1,
          106.2
        ],
        [
          401.9,
          105.7
        ],
        [
          399.2,
          102.2
        ],
        [
          394.7,
          91.6
        ],
        [
          388.1,
          80.2
        ],
        [
          384.6,
          75.5
        ],
        [
          375,
          67
        ],
        [
          369,
          60.2
        ],
        [
          365.7,
          49.9
        ],
        [
          362.7,
          48.5
        ],
        [
          344.3,
          49
        ],
        [
          338.6,
          52.6
        ],
        [
          332.8,
          58.3
        ],
        [
          327.3,
          62
        ],
        [
          324.5,
          63.2
        ],
        [
          321.4,
          63.4
        ],
        [
          317,
          60.8
        ]
      ]
    },
    {
      "name": "Ci Liwung",
      "type": "river",
      "width": 14,
      "points": [
        [
          317,
          29.3
        ],
        [
          322.7,
          18.1
        ],
        [
          321.5,
          12.9
        ],
        [
          319.3,
          11.5
        ],
        [
          317,
          11.3
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          658.2,
          506.1
        ],
        [
          658.9,
          496
        ],
        [
          670.8,
          445.8
        ],
        [
          671.4,
          438.2
        ],
        [
          667.3,
          427.6
        ],
        [
          658.5,
          394.3
        ],
        [
          655,
          385
        ],
        [
          643.8,
          347
        ],
        [
          616.5,
          288.6
        ]
      ]
    },
    {
      "name": "Sodetan Ciliwung",
      "type": "drain",
      "width": 5,
      "points": [
        [
          759.3,
          520.8
        ],
        [
          762.1,
          519.6
        ],
        [
          763.4,
          512.7
        ]
      ]
    },
    {
      "name": "Kanal Banjir Barat",
      "type": "canal",
      "width": 12,
      "points": [
        [
          358.1,
          182.3
        ],
        [
          352.1,
          186.6
        ]
      ]
    },
    {
      "name": "Kanal Banjir Barat",
      "type": "canal",
      "width": 12,
      "points": [
        [
          367.7,
          178.4
        ],
        [
          361.4,
          180.3
        ],
        [
          358.1,
          182.3
        ]
      ]
    },
    {
      "name": "Kali Utan Kayu",
      "type": "river",
      "width": 14,
      "points": [
        [
          595.1,
          -342.7
        ],
        [
          593.2,
          -346.9
        ],
        [
          594.8,
          -348.7
        ],
        [
          676,
          -385.8
        ],
        [
          700,
          -395.9
        ],
        [
          726.6,
          -405.1
        ],
        [
          771.5,
          -418
        ],
        [
          789.8,
          -431.6
        ],
        [
          798.8,
          -437
        ],
        [
          804.4,
          -446.3
        ],
        [
          804.1,
          -451.6
        ],
        [
          805.2,
          -455.7
        ]
      ]
    },
    {
      "name": "Kali Baru Barat",
      "type": "canal",
      "width": 12,
      "points": [
        [
          333.4,
          383.5
        ],
        [
          323.3,
          368.2
        ],
        [
          317,
          353.8
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          798.4,
          -406.7
        ],
        [
          796.2,
          -398.9
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          832.2,
          -461.7
        ],
        [
          825.9,
          -458.7
        ],
        [
          819.6,
          -449
        ],
        [
          805.1,
          -423
        ]
      ]
    },
    {
      "name": "Tanggul Cempaka Putih Timur",
      "type": "stream",
      "width": 5,
      "points": [
        [
          706.7,
          -393.6
        ],
        [
          707.7,
          -396.1
        ],
        [
          710.9,
          -399.7
        ]
      ]
    },
    {
      "name": "Kali Sunter",
      "type": "river",
      "width": 14,
      "points": [
        [
          409,
          -291.4
        ],
        [
          415,
          -428.9
        ],
        [
          425.4,
          -446.8
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          373.6,
          -51.6
        ],
        [
          384.8,
          -62.6
        ],
        [
          390.4,
          -72.2
        ],
        [
          394.8,
          -82.5
        ],
        [
          397.8,
          -104.2
        ],
        [
          400,
          -107.3
        ],
        [
          405.7,
          -111.1
        ],
        [
          403.2,
          -123.7
        ],
        [
          402,
          -125.1
        ],
        [
          401,
          -130
        ]
      ]
    },
    {
      "name": "Kali Utan Kayu",
      "type": "river",
      "width": 14,
      "points": [
        [
          663.4,
          -43.3
        ],
        [
          666.9,
          -57
        ],
        [
          668.9,
          -77.5
        ],
        [
          656.8,
          -154
        ],
        [
          644.7,
          -183.7
        ],
        [
          613.2,
          -219
        ],
        [
          583.1,
          -254.9
        ],
        [
          581.1,
          -265.4
        ]
      ]
    },
    {
      "name": "Kali Utan Kayu",
      "type": "river",
      "width": 14,
      "points": [
        [
          611.8,
          200.8
        ],
        [
          622.6,
          198
        ],
        [
          627.8,
          190.4
        ],
        [
          635.1,
          182.4
        ],
        [
          647.2,
          175.6
        ],
        [
          648.4,
          174.4
        ],
        [
          652.3,
          162
        ],
        [
          653.6,
          156.3
        ],
        [
          653.9,
          146.7
        ],
        [
          647.2,
          101.8
        ],
        [
          647.2,
          96.7
        ],
        [
          651.3,
          60.4
        ],
        [
          651,
          57.2
        ]
      ]
    },
    {
      "name": "Kali Utan Kayu",
      "type": "river",
      "width": 14,
      "points": [
        [
          651,
          57.2
        ],
        [
          637.2,
          12.6
        ],
        [
          637.1,
          8.3
        ],
        [
          638.7,
          1.7
        ],
        [
          646.6,
          -12.4
        ],
        [
          659.8,
          -28.4
        ],
        [
          663.4,
          -43.3
        ]
      ]
    },
    {
      "name": "Kali Sunter",
      "type": "river",
      "width": 14,
      "points": [
        [
          425.4,
          -446.8
        ],
        [
          447.2,
          -484.2
        ],
        [
          481,
          -539.1
        ],
        [
          499,
          -559.7
        ],
        [
          506.1,
          -563.1
        ],
        [
          514.2,
          -572.2
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          659,
          545.4
        ],
        [
          657.8,
          523.6
        ],
        [
          658.2,
          506.1
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          408,
          -425.3
        ],
        [
          412.6,
          -429.7
        ],
        [
          415.5,
          -430.4
        ]
      ]
    },
    {
      "name": "Kali Baru",
      "type": "river",
      "width": 14,
      "points": [
        [
          317,
          -293.5
        ],
        [
          326,
          -343.6
        ],
        [
          362.4,
          -380
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          401,
          -130
        ],
        [
          400.4,
          -133.6
        ],
        [
          402.9,
          -165.6
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          402.9,
          -165.6
        ],
        [
          404.9,
          -199
        ]
      ]
    },
    {
      "name": "Kali Item",
      "type": "river",
      "width": 14,
      "points": [
        [
          507.2,
          -564.3
        ],
        [
          510.6,
          -562.2
        ]
      ]
    },
    {
      "name": "Kali Baru",
      "type": "river",
      "width": 14,
      "points": [
        [
          362.4,
          -380
        ],
        [
          407.9,
          -425.3
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          751.9,
          -268.6
        ],
        [
          751.4,
          -263.9
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          490.5,
          25.6
        ],
        [
          485.8,
          21.9
        ]
      ]
    },
    {
      "name": "Kali Baru Barat",
      "type": "canal",
      "width": 12,
      "points": [
        [
          340.4,
          396.4
        ],
        [
          333.4,
          383.5
        ]
      ]
    },
    {
      "name": "Kali Baru Barat",
      "type": "canal",
      "width": 12,
      "points": [
        [
          342.1,
          415.2
        ],
        [
          343.8,
          410
        ],
        [
          342,
          399.2
        ],
        [
          340.4,
          396.4
        ]
      ]
    },
    {
      "name": "Kali Baru Barat",
      "type": "canal",
      "width": 12,
      "points": [
        [
          341.2,
          434.1
        ],
        [
          342.1,
          415.2
        ]
      ]
    },
    {
      "name": "Kali Baru Barat",
      "type": "canal",
      "width": 12,
      "points": [
        [
          317,
          518.6
        ],
        [
          331,
          506.2
        ],
        [
          336.1,
          499.2
        ],
        [
          339.5,
          484.9
        ],
        [
          341.6,
          462.6
        ],
        [
          341.2,
          434.1
        ]
      ]
    },
    {
      "name": "Sodetan Ciliwung",
      "type": "drain",
      "width": 5,
      "points": [
        [
          598.2,
          536
        ],
        [
          612.8,
          526.8
        ]
      ]
    },
    {
      "name": "Kali Item Sunter",
      "type": "river",
      "width": 14,
      "points": [
        [
          818.1,
          -458.8
        ],
        [
          825.6,
          -460.8
        ]
      ]
    },
    {
      "name": "Kali Item Sunter",
      "type": "river",
      "width": 14,
      "points": [
        [
          826.8,
          -461.1
        ],
        [
          832.7,
          -462.5
        ]
      ]
    },
    {
      "name": "Kali Sunter",
      "type": "river",
      "width": 14,
      "points": [
        [
          404.9,
          -199
        ],
        [
          408.9,
          -285.2
        ]
      ]
    },
    {
      "name": "Kali Sunter",
      "type": "river",
      "width": 14,
      "points": [
        [
          408.9,
          -285.2
        ],
        [
          409,
          -291.4
        ]
      ]
    },
    {
      "name": "Tanggul Cempaka Putih Timur",
      "type": "stream",
      "width": 5,
      "points": [
        [
          707.9,
          -387.2
        ],
        [
          706.7,
          -393.6
        ]
      ]
    },
    {
      "name": "Sodetan Ciliwung",
      "type": "drain",
      "width": 5,
      "points": [
        [
          612.8,
          526.8
        ],
        [
          620.8,
          524.3
        ],
        [
          695.7,
          520.5
        ],
        [
          759.3,
          520.8
        ]
      ]
    },
    {
      "name": "Kanal Banjir Timur",
      "type": "river",
      "width": 14,
      "points": [
        [
          788.4,
          480.3
        ],
        [
          793.6,
          477
        ],
        [
          799.7,
          474.9
        ],
        [
          808.1,
          473.4
        ],
        [
          820.3,
          473
        ],
        [
          841.4,
          473.7
        ],
        [
          849.4,
          474.4
        ],
        [
          907.6,
          488.8
        ],
        [
          938.6,
          493.5
        ],
        [
          960,
          495.1
        ]
      ]
    },
    {
      "name": "Sunter",
      "type": "river",
      "width": 14,
      "points": [
        [
          854,
          -499
        ],
        [
          922.1,
          -615
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          854,
          -499
        ],
        [
          852.6,
          -496.5
        ]
      ]
    },
    {
      "name": "Kanal Banjir Timur",
      "type": "river",
      "width": 14,
      "points": [
        [
          779.8,
          484.6
        ],
        [
          782.7,
          482.7
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          788.4,
          480.3
        ],
        [
          782.7,
          482.7
        ]
      ]
    },
    {
      "name": "Kali Utan Kayu",
      "type": "river",
      "width": 14,
      "points": [
        [
          581.1,
          -265.4
        ],
        [
          581.1,
          -283.6
        ],
        [
          581.5,
          -286.9
        ],
        [
          583.2,
          -291
        ],
        [
          585.9,
          -294.9
        ],
        [
          588.3,
          -296.5
        ],
        [
          605.4,
          -305.3
        ],
        [
          606.9,
          -306.7
        ],
        [
          608.4,
          -311.4
        ],
        [
          608.4,
          -313.5
        ],
        [
          597.8,
          -336.7
        ]
      ]
    },
    {
      "name": "Kali Utan Kayu",
      "type": "river",
      "width": 14,
      "points": [
        [
          597.8,
          -336.7
        ],
        [
          595.1,
          -342.7
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          958.5,
          -86.7
        ],
        [
          905.9,
          -78
        ],
        [
          863.1,
          -72.1
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          824.6,
          -71.9
        ],
        [
          821.6,
          -76.7
        ],
        [
          819,
          -86.7
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          863.1,
          -72.1
        ],
        [
          860.2,
          -71.7
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          860.2,
          -71.7
        ],
        [
          841,
          -69
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          839.4,
          -68.8
        ],
        [
          829,
          -69
        ],
        [
          826.2,
          -70.5
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          826.2,
          -70.5
        ],
        [
          824.6,
          -71.9
        ]
      ]
    },
    {
      "name": "Kali Item Sunter",
      "type": "river",
      "width": 14,
      "points": [
        [
          510.6,
          -562.2
        ],
        [
          548.9,
          -567.8
        ],
        [
          553,
          -567.1
        ],
        [
          690.3,
          -490.2
        ],
        [
          743.6,
          -457.8
        ],
        [
          758.8,
          -446.6
        ],
        [
          761.7,
          -445.7
        ],
        [
          768.8,
          -446.4
        ],
        [
          798.6,
          -454.1
        ]
      ]
    },
    {
      "name": "Kali Item Sunter",
      "type": "river",
      "width": 14,
      "points": [
        [
          809.6,
          -456.7
        ],
        [
          817.6,
          -458.7
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          798.6,
          -454.1
        ],
        [
          801.2,
          -454.7
        ]
      ]
    },
    {
      "name": "Kali Item Sunter",
      "type": "river",
      "width": 14,
      "points": [
        [
          801.2,
          -454.7
        ],
        [
          807.7,
          -456.3
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          803.2,
          -417.1
        ],
        [
          798.4,
          -406.7
        ]
      ]
    },
    {
      "name": null,
      "type": "river",
      "width": 14,
      "points": [
        [
          805.1,
          -423
        ],
        [
          803.2,
          -417.1
        ]
      ]
    },
    {
      "name": "Sunter",
      "type": "river",
      "width": 14,
      "points": [
        [
          960,
          -317.3
        ],
        [
          923.3,
          -339.7
        ],
        [
          901.2,
          -352.1
        ],
        [
          818.4,
          -404.5
        ],
        [
          813.9,
          -410
        ],
        [
          811.8,
          -413.6
        ],
        [
          811.2,
          -421.4
        ],
        [
          812.4,
          -428.6
        ],
        [
          815.4,
          -436.5
        ],
        [
          832.7,
          -462.5
        ],
        [
          852.6,
          -496.5
        ]
      ]
    }
  ],
  "waterBodies": [
    {
      "name": "Kelapa Gading Barat Reservoir",
      "points": [
        [
          919.1,
          -586.3
        ],
        [
          920.2,
          -586.3
        ],
        [
          920.9,
          -586.8
        ],
        [
          923.6,
          -591.9
        ],
        [
          923.7,
          -592.7
        ],
        [
          923.3,
          -593.6
        ],
        [
          920.1,
          -595.5
        ],
        [
          919.5,
          -596.2
        ],
        [
          919.5,
          -597.2
        ],
        [
          926.2,
          -608.7
        ],
        [
          927.1,
          -609.3
        ],
        [
          928.1,
          -609
        ],
        [
          939.9,
          -602.7
        ],
        [
          940.4,
          -602.1
        ],
        [
          940.6,
          -601.3
        ],
        [
          940.5,
          -600.6
        ],
        [
          941.4,
          -600.5
        ],
        [
          941.4,
          -599.9
        ],
        [
          941.4,
          -599.3
        ],
        [
          939.8,
          -599.2
        ],
        [
          913.7,
          -554.9
        ],
        [
          912.9,
          -554.4
        ],
        [
          912.3,
          -554.3
        ],
        [
          903.3,
          -559.5
        ],
        [
          902.7,
          -560.6
        ],
        [
          902.7,
          -561.9
        ],
        [
          902.8,
          -562.6
        ],
        [
          904.1,
          -564.8
        ],
        [
          904.1,
          -565.4
        ],
        [
          903.8,
          -565.8
        ],
        [
          904.2,
          -566.5
        ],
        [
          904.5,
          -567.1
        ],
        [
          905.1,
          -567
        ],
        [
          905.6,
          -567.5
        ],
        [
          906.4,
          -569.4
        ],
        [
          906.4,
          -570
        ],
        [
          906,
          -570.6
        ],
        [
          904.1,
          -571.6
        ],
        [
          913.9,
          -587.9
        ],
        [
          914.4,
          -588.3
        ],
        [
          915.3,
          -588.4
        ],
        [
          919.1,
          -586.3
        ]
      ]
    },
    {
      "name": "Waduk Ria Rio",
      "points": [
        [
          776.4,
          -350.6
        ],
        [
          777.1,
          -348.9
        ],
        [
          776.8,
          -347.1
        ],
        [
          808.5,
          -337.9
        ],
        [
          808.1,
          -335.3
        ],
        [
          808.6,
          -334.8
        ],
        [
          810.7,
          -334.9
        ],
        [
          812.5,
          -334.8
        ],
        [
          813.3,
          -334.7
        ],
        [
          840.4,
          -328.6
        ],
        [
          850.6,
          -326.1
        ],
        [
          852.2,
          -326.7
        ],
        [
          853.7,
          -327.2
        ],
        [
          834.5,
          -336.1
        ],
        [
          826.8,
          -340.9
        ],
        [
          812.6,
          -347.4
        ],
        [
          814.1,
          -351.1
        ],
        [
          816,
          -352.2
        ],
        [
          817.5,
          -353.7
        ],
        [
          818.7,
          -357.6
        ],
        [
          817.7,
          -359.2
        ],
        [
          810.6,
          -363.3
        ],
        [
          810.5,
          -363.7
        ],
        [
          813.7,
          -369
        ],
        [
          814.1,
          -368.9
        ],
        [
          817.5,
          -374.1
        ],
        [
          817.1,
          -374.3
        ],
        [
          816.9,
          -375.2
        ],
        [
          817.5,
          -376.2
        ],
        [
          816.7,
          -376.6
        ],
        [
          816.1,
          -375.8
        ],
        [
          815.1,
          -375.5
        ],
        [
          813.2,
          -372.4
        ],
        [
          812.5,
          -372.5
        ],
        [
          811.8,
          -374.9
        ],
        [
          812,
          -375.8
        ],
        [
          823.6,
          -395.4
        ],
        [
          825.5,
          -398.2
        ],
        [
          824.5,
          -398.8
        ],
        [
          813.9,
          -382.2
        ],
        [
          810.5,
          -381.4
        ],
        [
          809.4,
          -380.3
        ],
        [
          802.4,
          -369.1
        ],
        [
          801.2,
          -368.8
        ],
        [
          793.5,
          -372
        ],
        [
          789.5,
          -371.7
        ],
        [
          787.4,
          -368.4
        ],
        [
          784.5,
          -359.3
        ],
        [
          782.4,
          -356.7
        ],
        [
          779.6,
          -355.1
        ],
        [
          778,
          -351.9
        ],
        [
          776.4,
          -350.6
        ]
      ]
    },
    {
      "name": null,
      "points": [
        [
          929.5,
          -226
        ],
        [
          934.1,
          -235.1
        ],
        [
          934.9,
          -236.5
        ],
        [
          936.4,
          -238.5
        ],
        [
          939.2,
          -239.6
        ],
        [
          941.1,
          -240.2
        ],
        [
          942.6,
          -241.1
        ],
        [
          943.8,
          -240.7
        ],
        [
          944,
          -240
        ],
        [
          945.5,
          -239.6
        ],
        [
          946.8,
          -239.3
        ],
        [
          949,
          -238.2
        ],
        [
          949.1,
          -236.4
        ],
        [
          949.7,
          -235.4
        ],
        [
          950.8,
          -234.9
        ],
        [
          952.2,
          -234.9
        ],
        [
          952.4,
          -234.4
        ],
        [
          952.1,
          -233.2
        ],
        [
          951.2,
          -232.3
        ],
        [
          950,
          -232.2
        ],
        [
          949,
          -232.6
        ],
        [
          947.8,
          -232.4
        ],
        [
          946.5,
          -231.1
        ],
        [
          945.8,
          -229.7
        ],
        [
          945.7,
          -228.1
        ],
        [
          947,
          -226.6
        ],
        [
          948.6,
          -226
        ],
        [
          950.3,
          -226
        ],
        [
          951.1,
          -226.8
        ],
        [
          951.3,
          -227.7
        ],
        [
          951.8,
          -229.5
        ],
        [
          952.7,
          -230.8
        ],
        [
          952.8,
          -231.7
        ],
        [
          953,
          -233
        ],
        [
          953.5,
          -234
        ],
        [
          954.5,
          -234.5
        ],
        [
          955.5,
          -234
        ],
        [
          956.1,
          -233.3
        ],
        [
          956.8,
          -230.7
        ],
        [
          956.2,
          -229.3
        ],
        [
          954.9,
          -227.9
        ],
        [
          954.3,
          -226.1
        ],
        [
          954.4,
          -224.5
        ],
        [
          954.9,
          -222.9
        ],
        [
          954.6,
          -219.9
        ],
        [
          954.2,
          -217.8
        ],
        [
          953.9,
          -216
        ],
        [
          952.9,
          -215
        ],
        [
          951.4,
          -212.8
        ],
        [
          950.7,
          -211.8
        ],
        [
          949.3,
          -211.6
        ],
        [
          947.8,
          -212.2
        ],
        [
          946.5,
          -213.2
        ],
        [
          946,
          -214.1
        ],
        [
          946.6,
          -215.5
        ],
        [
          946.5,
          -217.4
        ],
        [
          946.5,
          -219.1
        ],
        [
          946.2,
          -220
        ],
        [
          945.6,
          -220.6
        ],
        [
          944.8,
          -220.8
        ],
        [
          943.9,
          -220.3
        ],
        [
          943.5,
          -219.6
        ],
        [
          943.7,
          -218.3
        ],
        [
          944.2,
          -216.5
        ],
        [
          944.3,
          -215.1
        ],
        [
          943.9,
          -214.1
        ],
        [
          943.2,
          -213.2
        ],
        [
          943.4,
          -212.2
        ],
        [
          944,
          -211
        ],
        [
          944.6,
          -210.4
        ],
        [
          945.2,
          -209.9
        ],
        [
          945.2,
          -208.8
        ],
        [
          944.2,
          -207.6
        ],
        [
          942.8,
          -207.3
        ],
        [
          941,
          -207.5
        ],
        [
          939.6,
          -208.4
        ],
        [
          939.3,
          -209.8
        ],
        [
          938.2,
          -210.8
        ],
        [
          937.3,
          -212.2
        ],
        [
          937.2,
          -213.3
        ],
        [
          938.5,
          -215.7
        ],
        [
          938.9,
          -216.6
        ],
        [
          938.9,
          -217.6
        ],
        [
          938.4,
          -218.7
        ],
        [
          937,
          -219.5
        ],
        [
          935.3,
          -220.2
        ],
        [
          934.4,
          -219.2
        ],
        [
          934.2,
          -218.1
        ],
        [
          933.2,
          -216.8
        ],
        [
          931.3,
          -216.8
        ],
        [
          928.9,
          -218.7
        ],
        [
          927.8,
          -219.6
        ],
        [
          927.1,
          -221
        ],
        [
          927.4,
          -222.3
        ],
        [
          928.5,
          -224.2
        ],
        [
          929.5,
          -226
        ]
      ]
    },
    {
      "name": null,
      "points": [
        [
          564.3,
          298.6
        ],
        [
          560.9,
          299
        ],
        [
          548.3,
          305
        ],
        [
          537.2,
          311.5
        ],
        [
          531.1,
          314.5
        ],
        [
          523.9,
          315.2
        ],
        [
          520.7,
          314.1
        ],
        [
          513.2,
          306.8
        ],
        [
          508.9,
          302.9
        ],
        [
          507.2,
          302.1
        ],
        [
          505,
          302
        ],
        [
          504.9,
          301
        ],
        [
          503.8,
          300.6
        ],
        [
          501.8,
          300.4
        ],
        [
          498.7,
          304.1
        ],
        [
          495.5,
          307.8
        ],
        [
          494.5,
          309.2
        ],
        [
          493.5,
          311.1
        ],
        [
          491.7,
          314.8
        ],
        [
          491.1,
          316.9
        ],
        [
          490.1,
          318.9
        ],
        [
          490.8,
          320.3
        ],
        [
          491.3,
          321.6
        ],
        [
          492,
          319.7
        ],
        [
          493.8,
          317.9
        ],
        [
          495.7,
          314.2
        ],
        [
          498.7,
          308.2
        ],
        [
          501.3,
          304.5
        ],
        [
          502.9,
          303.9
        ],
        [
          504.9,
          304.4
        ],
        [
          507.2,
          305.7
        ],
        [
          513.4,
          311.4
        ],
        [
          516,
          314.5
        ],
        [
          517.8,
          316.5
        ],
        [
          520.5,
          318.2
        ],
        [
          523.3,
          318.5
        ],
        [
          525.2,
          318.7
        ],
        [
          528.8,
          318.6
        ],
        [
          531.2,
          318.1
        ],
        [
          537.6,
          315.1
        ],
        [
          551.7,
          307.3
        ],
        [
          556.9,
          304.6
        ],
        [
          560.5,
          303.1
        ],
        [
          562.9,
          302.5
        ],
        [
          565.7,
          302.4
        ],
        [
          565,
          300
        ],
        [
          564.3,
          298.6
        ]
      ]
    },
    {
      "name": null,
      "points": [
        [
          574.9,
          420.4
        ],
        [
          573.5,
          423.6
        ],
        [
          574.1,
          424.7
        ],
        [
          576.3,
          429
        ],
        [
          571.2,
          429.2
        ],
        [
          570.4,
          422.2
        ],
        [
          571.2,
          418.8
        ],
        [
          573.2,
          417.6
        ],
        [
          578,
          416.8
        ],
        [
          583.3,
          417
        ],
        [
          588.8,
          417.1
        ],
        [
          589.9,
          416.9
        ],
        [
          590.9,
          416.3
        ],
        [
          591.6,
          415.9
        ],
        [
          594.6,
          410.4
        ],
        [
          594.2,
          405.6
        ],
        [
          592.8,
          401.1
        ],
        [
          588.3,
          397.1
        ],
        [
          582.3,
          391
        ],
        [
          579.5,
          387.3
        ],
        [
          577.8,
          384.5
        ],
        [
          574.5,
          381
        ],
        [
          571.7,
          377
        ],
        [
          568.6,
          371.3
        ],
        [
          567,
          365.3
        ],
        [
          566.8,
          364.1
        ],
        [
          565.8,
          361.2
        ],
        [
          565,
          358.7
        ],
        [
          563.2,
          355.9
        ],
        [
          560.5,
          353.9
        ],
        [
          557.4,
          352.8
        ],
        [
          553.1,
          352.3
        ],
        [
          550.8,
          352.6
        ],
        [
          548.7,
          353.2
        ],
        [
          545.9,
          356.1
        ],
        [
          544.8,
          359.1
        ],
        [
          545,
          361.6
        ],
        [
          546.4,
          363.6
        ],
        [
          548.3,
          367.2
        ],
        [
          548.7,
          369.2
        ],
        [
          548.5,
          372.4
        ],
        [
          547.7,
          374.8
        ],
        [
          546.6,
          377
        ],
        [
          544.6,
          378.9
        ],
        [
          537.1,
          381.4
        ],
        [
          535.3,
          381.7
        ],
        [
          533.2,
          381.4
        ],
        [
          531.5,
          380.7
        ],
        [
          528.4,
          379.5
        ],
        [
          523.9,
          377.5
        ],
        [
          523,
          376.6
        ],
        [
          522,
          375.2
        ],
        [
          521.6,
          372.9
        ],
        [
          521.9,
          370.3
        ],
        [
          522.4,
          368.5
        ],
        [
          525,
          364.5
        ],
        [
          526.5,
          361.7
        ],
        [
          527.2,
          360.3
        ],
        [
          528.7,
          356.5
        ],
        [
          530.6,
          357.2
        ],
        [
          532.5,
          358.2
        ],
        [
          531,
          361.7
        ],
        [
          527.1,
          367
        ],
        [
          525.7,
          368.7
        ],
        [
          525,
          369.9
        ],
        [
          524.8,
          371.6
        ],
        [
          525,
          373
        ],
        [
          525.2,
          373.6
        ],
        [
          525.9,
          374.7
        ],
        [
          526.6,
          375.3
        ],
        [
          528.6,
          376
        ],
        [
          531.4,
          376.5
        ],
        [
          534.6,
          377.1
        ],
        [
          536.9,
          377.2
        ],
        [
          538.8,
          376.9
        ],
        [
          540.7,
          376.5
        ],
        [
          542.3,
          375.8
        ],
        [
          543.4,
          375.2
        ],
        [
          544.2,
          374.4
        ],
        [
          544.6,
          373.6
        ],
        [
          545.3,
          371.9
        ],
        [
          545.5,
          370.4
        ],
        [
          544.9,
          367.3
        ],
        [
          544,
          365.9
        ],
        [
          542.6,
          364.3
        ],
        [
          541,
          361.2
        ],
        [
          541.2,
          359.6
        ],
        [
          541.9,
          357.9
        ],
        [
          545.5,
          353.2
        ],
        [
          548.4,
          351.2
        ],
        [
          549.7,
          350.6
        ],
        [
          552.9,
          349.7
        ],
        [
          558.2,
          350.2
        ],
        [
          560.8,
          350.5
        ],
        [
          562.5,
          351.2
        ],
        [
          565.4,
          353
        ],
        [
          567.4,
          355.4
        ],
        [
          568,
          358.3
        ],
        [
          569.1,
          362.6
        ],
        [
          571.3,
          368.3
        ],
        [
          573.3,
          372.7
        ],
        [
          581.3,
          382.8
        ],
        [
          585.5,
          388.2
        ],
        [
          589.1,
          391.9
        ],
        [
          593.9,
          397.2
        ],
        [
          596.7,
          401
        ],
        [
          597.7,
          402.9
        ],
        [
          599.1,
          405.7
        ],
        [
          599.4,
          407.7
        ],
        [
          599.3,
          412.3
        ],
        [
          598.3,
          415.2
        ],
        [
          597.4,
          416.7
        ],
        [
          595.3,
          418.7
        ],
        [
          592.4,
          419.8
        ],
        [
          587.1,
          420.7
        ],
        [
          582.9,
          420.4
        ],
        [
          577.2,
          420.3
        ],
        [
          574.9,
          420.4
        ]
      ]
    },
    {
      "name": null,
      "points": [
        [
          365.4,
          180.7
        ],
        [
          365,
          177.8
        ],
        [
          367,
          177.2
        ],
        [
          366.5,
          173.2
        ],
        [
          367.8,
          168.9
        ],
        [
          368.6,
          165.3
        ],
        [
          369.4,
          162.2
        ],
        [
          370.2,
          159
        ],
        [
          370.7,
          157.3
        ],
        [
          370.9,
          156.4
        ],
        [
          371.3,
          156
        ],
        [
          371.7,
          155.7
        ],
        [
          372.1,
          154.9
        ],
        [
          372.6,
          154.1
        ],
        [
          373.2,
          153.4
        ],
        [
          373.7,
          152.6
        ],
        [
          375.2,
          151.1
        ],
        [
          376.8,
          149.6
        ],
        [
          378.9,
          148.5
        ],
        [
          381.1,
          147.8
        ],
        [
          381.9,
          151
        ],
        [
          379.8,
          151.4
        ],
        [
          377.8,
          152.6
        ],
        [
          374.8,
          156
        ],
        [
          372.5,
          160.1
        ],
        [
          370.6,
          169.3
        ],
        [
          370.6,
          173.5
        ],
        [
          370.4,
          174.1
        ],
        [
          369.9,
          174.7
        ],
        [
          369.5,
          175.1
        ],
        [
          368.9,
          175.1
        ],
        [
          368.6,
          176.8
        ],
        [
          369.8,
          178.1
        ],
        [
          372.8,
          179.4
        ],
        [
          376.8,
          181.2
        ],
        [
          381.3,
          184.7
        ],
        [
          383,
          186
        ],
        [
          384.3,
          188.6
        ],
        [
          385.8,
          190
        ],
        [
          386.9,
          191.1
        ],
        [
          388.4,
          192.6
        ],
        [
          389.6,
          193.6
        ],
        [
          391,
          194.6
        ],
        [
          393.6,
          196.6
        ],
        [
          396.5,
          197.6
        ],
        [
          399.8,
          199
        ],
        [
          402.7,
          200.5
        ],
        [
          405.4,
          200.9
        ],
        [
          408.2,
          201.7
        ],
        [
          410.3,
          202.6
        ],
        [
          412.3,
          203.4
        ],
        [
          415.6,
          204
        ],
        [
          417.8,
          204.7
        ],
        [
          419.5,
          205.9
        ],
        [
          422.7,
          207.9
        ],
        [
          424.3,
          208.9
        ],
        [
          426.5,
          210.4
        ],
        [
          429.7,
          212.7
        ],
        [
          433.3,
          215.5
        ],
        [
          435.9,
          217.4
        ],
        [
          438.2,
          219.9
        ],
        [
          440.7,
          222
        ],
        [
          441.1,
          224.2
        ],
        [
          442.3,
          226.1
        ],
        [
          444.4,
          227.9
        ],
        [
          446.5,
          229.2
        ],
        [
          450.2,
          230.8
        ],
        [
          453.8,
          232
        ],
        [
          461.7,
          233.9
        ],
        [
          469.1,
          235.5
        ],
        [
          474.7,
          236.7
        ],
        [
          478.4,
          237.7
        ],
        [
          480.4,
          238.8
        ],
        [
          480.8,
          239
        ],
        [
          481.3,
          239.3
        ],
        [
          482.7,
          240.1
        ],
        [
          484.1,
          241.3
        ],
        [
          484.9,
          242.3
        ],
        [
          485.7,
          243.1
        ],
        [
          486.6,
          244.1
        ],
        [
          487.7,
          244.9
        ],
        [
          489.3,
          246.4
        ],
        [
          491.4,
          249.6
        ],
        [
          488,
          251.2
        ],
        [
          487.3,
          249.8
        ],
        [
          486.8,
          248.4
        ],
        [
          486.6,
          247.5
        ],
        [
          486.2,
          246.8
        ],
        [
          485.1,
          245.6
        ],
        [
          483.9,
          244.6
        ],
        [
          481.9,
          243
        ],
        [
          480.7,
          241.9
        ],
        [
          479.5,
          241.1
        ],
        [
          478,
          240.1
        ],
        [
          476.7,
          239.4
        ],
        [
          472.5,
          238
        ],
        [
          471.2,
          237.7
        ],
        [
          469.8,
          237.4
        ],
        [
          467.3,
          236.5
        ],
        [
          461,
          235.3
        ],
        [
          457.7,
          234.8
        ],
        [
          451.8,
          233.5
        ],
        [
          450.1,
          233.1
        ],
        [
          448.4,
          232.5
        ],
        [
          447.5,
          231.8
        ],
        [
          446.7,
          231.5
        ],
        [
          445.7,
          231.1
        ],
        [
          444.5,
          230.3
        ],
        [
          443,
          229.7
        ],
        [
          442,
          229
        ],
        [
          440.3,
          228
        ],
        [
          439.5,
          227.3
        ],
        [
          439.3,
          226.6
        ],
        [
          439.1,
          225.5
        ],
        [
          438.7,
          224.5
        ],
        [
          437.7,
          222.6
        ],
        [
          435.7,
          221.1
        ],
        [
          432,
          218.3
        ],
        [
          425.5,
          213.2
        ],
        [
          421.9,
          209.9
        ],
        [
          419.4,
          208
        ],
        [
          418.3,
          207.1
        ],
        [
          416.9,
          206.6
        ],
        [
          415.2,
          206.1
        ],
        [
          412.9,
          204.9
        ],
        [
          410.4,
          204.5
        ],
        [
          408.1,
          203.9
        ],
        [
          404.9,
          203.9
        ],
        [
          400.7,
          202.7
        ],
        [
          395.4,
          200.8
        ],
        [
          389.8,
          197.6
        ],
        [
          382.9,
          190.2
        ],
        [
          382.3,
          188.7
        ],
        [
          376.6,
          184.2
        ],
        [
          373.4,
          181.7
        ],
        [
          371.4,
          181
        ],
        [
          368.8,
          180.5
        ],
        [
          365.4,
          180.7
        ]
      ]
    },
    {
      "name": null,
      "points": [
        [
          776.2,
          485.9
        ],
        [
          776.9,
          483
        ],
        [
          777.6,
          482.7
        ],
        [
          779.8,
          481.2
        ],
        [
          784,
          479.8
        ],
        [
          785.7,
          479.9
        ],
        [
          791.6,
          474.2
        ],
        [
          796.9,
          472.3
        ],
        [
          800.7,
          472
        ],
        [
          833.9,
          471.4
        ],
        [
          850.4,
          472.1
        ],
        [
          848.9,
          475.8
        ],
        [
          843.2,
          475.3
        ],
        [
          832,
          475.2
        ],
        [
          823.9,
          475.7
        ],
        [
          817.5,
          475.4
        ],
        [
          812.2,
          475.3
        ],
        [
          806.8,
          476
        ],
        [
          801.9,
          477.9
        ],
        [
          794.6,
          481.2
        ],
        [
          792.3,
          483
        ],
        [
          786,
          483
        ],
        [
          784.3,
          483.8
        ],
        [
          782.9,
          484.8
        ],
        [
          781.8,
          485.8
        ],
        [
          781,
          486.9
        ],
        [
          780.8,
          487.4
        ],
        [
          777.1,
          491.2
        ],
        [
          767.8,
          502.2
        ],
        [
          765.3,
          500.1
        ],
        [
          774,
          489.5
        ],
        [
          775.3,
          487.6
        ],
        [
          776.2,
          485.9
        ]
      ]
    }
  ],
  "bridges": [],
  "seamCore": {
    "roads": [
      {
        "name": "Jalan Sultan Agung",
        "width": 9.2,
        "points": [
          [
            305.7,
            190.8
          ],
          [
            264.1,
            176.5
          ],
          [
            252,
            172.4
          ],
          [
            248.6,
            171.3
          ],
          [
            244.3,
            170
          ],
          [
            235.1,
            166.7
          ],
          [
            232.7,
            165.9
          ],
          [
            225.2,
            163.1
          ],
          [
            220.1,
            161.3
          ],
          [
            219.5,
            161.1
          ]
        ]
      },
      {
        "name": "Jalan Raya Casablanca",
        "width": 9.2,
        "points": [
          [
            305.5,
            417.9
          ],
          [
            303.5,
            418.8
          ],
          [
            301.8,
            419.6
          ],
          [
            300.2,
            420.2
          ],
          [
            296.8,
            421.1
          ],
          [
            293,
            422
          ],
          [
            284.9,
            423.6
          ],
          [
            274.6,
            425.1
          ],
          [
            270.5,
            425.7
          ],
          [
            268.3,
            425.9
          ],
          [
            265.7,
            426.1
          ],
          [
            261.5,
            426.4
          ],
          [
            258.8,
            426.5
          ],
          [
            257.6,
            426.6
          ],
          [
            256.4,
            426.6
          ],
          [
            253.9,
            426.7
          ],
          [
            245,
            427.2
          ],
          [
            237.9,
            427.8
          ],
          [
            232.3,
            428.5
          ],
          [
            224.5,
            429.7
          ]
        ]
      },
      {
        "name": "Jalan Sultan Agung",
        "width": 9.2,
        "points": [
          [
            219.8,
            159.2
          ],
          [
            235.7,
            164.9
          ],
          [
            252.8,
            170.6
          ],
          [
            262,
            173.8
          ],
          [
            303.4,
            188
          ],
          [
            312.2,
            191
          ],
          [
            313.5,
            191.6
          ],
          [
            315.2,
            192.5
          ],
          [
            317,
            193.2
          ]
        ]
      },
      {
        "name": "Jalan Sultan Agung",
        "width": 9.2,
        "points": [
          [
            317,
            193.2
          ],
          [
            317.4,
            193.4
          ]
        ]
      },
      {
        "name": "Jalan Raya Casablanca",
        "width": 9.2,
        "points": [
          [
            232,
            426.4
          ],
          [
            239.2,
            425.2
          ],
          [
            241.7,
            424.8
          ],
          [
            243.4,
            424.6
          ],
          [
            248.3,
            424.3
          ],
          [
            249.6,
            424.2
          ],
          [
            256.1,
            423.9
          ],
          [
            257.4,
            423.9
          ],
          [
            259.2,
            423.8
          ],
          [
            261.5,
            423.5
          ],
          [
            267.1,
            423
          ],
          [
            274.5,
            422.2
          ],
          [
            276.6,
            422
          ],
          [
            279.7,
            421.8
          ],
          [
            285.1,
            421.3
          ],
          [
            286.7,
            421.1
          ],
          [
            290.6,
            420.3
          ],
          [
            295.3,
            419
          ],
          [
            298.2,
            418.1
          ],
          [
            299.8,
            417.6
          ],
          [
            302,
            416.9
          ],
          [
            303.4,
            416.3
          ],
          [
            304.9,
            415.7
          ]
        ]
      }
    ],
    "waterways": [
      {
        "name": "Kanal Banjir Barat",
        "width": 10.5,
        "points": [
          [
            352.1,
            186.6
          ],
          [
            349.9,
            188
          ],
          [
            344.5,
            191.5
          ],
          [
            341.8,
            192.6
          ],
          [
            339.6,
            193.3
          ],
          [
            337.3,
            193.7
          ],
          [
            333.7,
            193.8
          ],
          [
            330.8,
            193.6
          ],
          [
            326.3,
            192.7
          ],
          [
            317.9,
            190.1
          ],
          [
            317,
            189.7
          ]
        ]
      },
      {
        "name": "Kanal Banjir Barat",
        "width": 10.5,
        "points": [
          [
            317,
            189.7
          ],
          [
            307.9,
            186.1
          ],
          [
            258.3,
            168.3
          ],
          [
            245.1,
            163.3
          ],
          [
            224,
            156.6
          ],
          [
            199.5,
            147.3
          ],
          [
            157.1,
            141.1
          ],
          [
            90.4,
            130.6
          ],
          [
            64.6,
            124.6
          ],
          [
            61.9,
            124.2
          ],
          [
            46.2,
            120.3
          ],
          [
            2.5,
            110.4
          ],
          [
            -0.9,
            109.6
          ]
        ]
      },
      {
        "name": "Ci Liwung",
        "width": 10.5,
        "points": [
          [
            583.3,
            486.3
          ],
          [
            589.8,
            477.8
          ],
          [
            589,
            464.6
          ],
          [
            588.2,
            451.6
          ],
          [
            586.2,
            447.8
          ],
          [
            582.8,
            442.9
          ],
          [
            575.1,
            431.4
          ],
          [
            571.9,
            423
          ],
          [
            572.7,
            419.7
          ],
          [
            574.3,
            419
          ],
          [
            585.6,
            419.3
          ],
          [
            591.3,
            418.3
          ],
          [
            593.5,
            417.6
          ],
          [
            595.5,
            416.1
          ],
          [
            596.8,
            413.2
          ],
          [
            597.3,
            411.7
          ],
          [
            597.5,
            409.9
          ],
          [
            597.4,
            407.9
          ],
          [
            596.7,
            405.4
          ],
          [
            596,
            403
          ],
          [
            594.1,
            400.4
          ],
          [
            591,
            396.9
          ],
          [
            582.9,
            388.7
          ],
          [
            580.6,
            384.9
          ],
          [
            578,
            381.6
          ],
          [
            574.1,
            377
          ],
          [
            572.7,
            375.1
          ],
          [
            570.5,
            371.3
          ],
          [
            568.4,
            364.6
          ],
          [
            566.6,
            358.3
          ],
          [
            564.4,
            354.5
          ],
          [
            561,
            351.8
          ],
          [
            553.4,
            351.1
          ],
          [
            548.3,
            352.3
          ],
          [
            545.3,
            354.7
          ],
          [
            543.4,
            358.1
          ],
          [
            543.1,
            362
          ],
          [
            543.9,
            363.9
          ],
          [
            546.7,
            367.4
          ],
          [
            547.3,
            371.2
          ],
          [
            545.9,
            375.2
          ],
          [
            543.7,
            377.7
          ],
          [
            539.8,
            378.7
          ],
          [
            535.5,
            379.4
          ],
          [
            533.6,
            379.1
          ],
          [
            529.5,
            378
          ],
          [
            526.5,
            377
          ],
          [
            524.2,
            375.4
          ],
          [
            523.3,
            372.7
          ],
          [
            523.6,
            369.7
          ],
          [
            525.6,
            365.6
          ],
          [
            529.3,
            359.7
          ],
          [
            530.6,
            357.2
          ],
          [
            534.4,
            348.6
          ],
          [
            548.7,
            330.1
          ],
          [
            551.1,
            325.2
          ],
          [
            553.6,
            321.3
          ],
          [
            557.2,
            318.2
          ],
          [
            568.1,
            310.5
          ],
          [
            570.2,
            307.3
          ],
          [
            570.8,
            304.2
          ],
          [
            569.9,
            301.9
          ],
          [
            568.5,
            300.7
          ],
          [
            566.4,
            299.9
          ],
          [
            560.6,
            301.2
          ],
          [
            555.6,
            303.5
          ],
          [
            549,
            306.7
          ],
          [
            542.4,
            310.6
          ],
          [
            531.7,
            316.6
          ],
          [
            527.1,
            317.6
          ],
          [
            521.5,
            317
          ],
          [
            517.7,
            314
          ],
          [
            514.6,
            310.9
          ],
          [
            512.5,
            307.7
          ],
          [
            508.6,
            304.6
          ],
          [
            506.2,
            303.1
          ],
          [
            502.7,
            302.6
          ],
          [
            500.7,
            303.7
          ],
          [
            498.2,
            306.7
          ],
          [
            494.1,
            311.3
          ],
          [
            493.2,
            314.8
          ],
          [
            490.8,
            320.3
          ],
          [
            489.5,
            321.5
          ],
          [
            484.8,
            322
          ],
          [
            478,
            317.4
          ],
          [
            471.5,
            308.4
          ],
          [
            468.7,
            303.4
          ],
          [
            469.5,
            297.1
          ],
          [
            471.6,
            290.8
          ],
          [
            473.2,
            285.3
          ],
          [
            476.9,
            277.8
          ],
          [
            480.8,
            272.1
          ],
          [
            485.3,
            267.1
          ],
          [
            486.7,
            266.3
          ],
          [
            492.7,
            266.1
          ],
          [
            496.4,
            264.8
          ],
          [
            497.5,
            262.8
          ],
          [
            497.4,
            260.7
          ],
          [
            492.4,
            255.1
          ],
          [
            490.3,
            252.3
          ],
          [
            489.5,
            250.7
          ],
          [
            488.4,
            249.1
          ],
          [
            487.2,
            246.8
          ],
          [
            485.2,
            244.5
          ],
          [
            482.6,
            242.4
          ],
          [
            479.4,
            239.8
          ],
          [
            477.2,
            238.6
          ],
          [
            473.6,
            237.4
          ],
          [
            452,
            232.9
          ],
          [
            443.5,
            229
          ],
          [
            441.6,
            228.2
          ],
          [
            439.9,
            224.7
          ],
          [
            439.1,
            222.7
          ],
          [
            437.1,
            220.9
          ],
          [
            428.7,
            213.9
          ],
          [
            418.9,
            207
          ],
          [
            415.3,
            205.4
          ],
          [
            413.4,
            204.6
          ],
          [
            411.5,
            204.2
          ],
          [
            402.6,
            201.8
          ],
          [
            398.2,
            200.1
          ],
          [
            391.1,
            195.7
          ],
          [
            387.7,
            192.9
          ],
          [
            382.3,
            187.5
          ],
          [
            378.5,
            184.4
          ],
          [
            374.4,
            181.6
          ],
          [
            371.1,
            179.9
          ],
          [
            369.3,
            179.1
          ],
          [
            367.7,
            178.4
          ],
          [
            368.2,
            174.9
          ],
          [
            368.6,
            171.1
          ],
          [
            370.8,
            161.7
          ],
          [
            373,
            155.8
          ],
          [
            377.1,
            151.1
          ],
          [
            381.3,
            149.6
          ],
          [
            386.1,
            149
          ],
          [
            394.8,
            154.2
          ],
          [
            400,
            154.9
          ],
          [
            402.9,
            155.3
          ],
          [
            405.6,
            155.2
          ],
          [
            411,
            154.7
          ],
          [
            416.5,
            154.4
          ],
          [
            419.3,
            155.3
          ],
          [
            421.4,
            156.8
          ],
          [
            427.2,
            162.9
          ],
          [
            430.4,
            164.1
          ],
          [
            434.2,
            163.9
          ],
          [
            441.2,
            161.7
          ],
          [
            446,
            158.5
          ],
          [
            452.8,
            152.4
          ],
          [
            455.5,
            147.9
          ],
          [
            457.9,
            143.5
          ],
          [
            461.6,
            134.5
          ],
          [
            461.4,
            123.5
          ],
          [
            461,
            120.1
          ],
          [
            460.4,
            117.1
          ],
          [
            459.4,
            113.8
          ],
          [
            457.7,
            110.8
          ],
          [
            456.8,
            109.1
          ],
          [
            455.4,
            107.6
          ],
          [
            453.7,
            106.1
          ],
          [
            451.2,
            105
          ],
          [
            447.6,
            104.7
          ],
          [
            442.3,
            104.2
          ],
          [
            437.2,
            103.3
          ],
          [
            424.4,
            99.3
          ],
          [
            421.2,
            98.2
          ],
          [
            418.3,
            98
          ],
          [
            416.2,
            98.6
          ],
          [
            414.6,
            99.6
          ],
          [
            412.3,
            101
          ],
          [
            406.2,
            105.2
          ],
          [
            404.7,
            105.7
          ],
          [
            403.1,
            106.2
          ],
          [
            401.1,
            105.1
          ],
          [
            399.2,
            102.2
          ],
          [
            397.6,
            98.8
          ],
          [
            396.6,
            96.6
          ],
          [
            394.7,
            91.6
          ],
          [
            388.1,
            80.2
          ],
          [
            384.6,
            75.5
          ],
          [
            375,
            67
          ],
          [
            369,
            60.2
          ],
          [
            365.7,
            49.9
          ],
          [
            362.7,
            48.5
          ],
          [
            350.8,
            48.5
          ],
          [
            344.3,
            49
          ],
          [
            338.6,
            52.6
          ],
          [
            332.8,
            58.3
          ],
          [
            327.3,
            62
          ],
          [
            324.5,
            63.2
          ],
          [
            321.4,
            63.4
          ],
          [
            318.5,
            61.9
          ],
          [
            317,
            60.8
          ]
        ]
      },
      {
        "name": "Ci Liwung",
        "width": 10.5,
        "points": [
          [
            317,
            60.8
          ],
          [
            315.6,
            59.8
          ],
          [
            311.6,
            55.8
          ],
          [
            309.6,
            52.2
          ],
          [
            308.8,
            47.2
          ],
          [
            310.7,
            41.6
          ],
          [
            317,
            29.3
          ]
        ]
      },
      {
        "name": "Ci Liwung",
        "width": 10.5,
        "points": [
          [
            317,
            29.3
          ],
          [
            322.7,
            18.1
          ],
          [
            321.5,
            12.9
          ],
          [
            319.3,
            11.5
          ],
          [
            317,
            11.3
          ]
        ]
      },
      {
        "name": "Ci Liwung",
        "width": 10.5,
        "points": [
          [
            317,
            11.3
          ],
          [
            313.2,
            10.9
          ],
          [
            304.7,
            11.6
          ],
          [
            299.5,
            11.5
          ],
          [
            296.9,
            10.6
          ],
          [
            293.9,
            7.8
          ],
          [
            291.7,
            4.9
          ],
          [
            290.5,
            -1.5
          ],
          [
            290.1,
            -5.3
          ],
          [
            290.1,
            -10.7
          ],
          [
            289.9,
            -16.2
          ],
          [
            291.6,
            -18.9
          ],
          [
            294.6,
            -21.5
          ],
          [
            298,
            -24.3
          ],
          [
            301.8,
            -27.2
          ],
          [
            307.9,
            -30.8
          ],
          [
            312.9,
            -35.2
          ],
          [
            314.6,
            -38.1
          ],
          [
            315.2,
            -40
          ],
          [
            312,
            -44.2
          ],
          [
            288.5,
            -54.6
          ],
          [
            282.2,
            -56.5
          ],
          [
            276.1,
            -60.1
          ],
          [
            257.8,
            -76.1
          ],
          [
            256,
            -77.9
          ],
          [
            254.5,
            -80.9
          ],
          [
            254,
            -83.6
          ],
          [
            254.5,
            -86
          ],
          [
            256,
            -87.9
          ],
          [
            261.5,
            -92
          ],
          [
            264.1,
            -95.1
          ],
          [
            265,
            -97.8
          ],
          [
            265.1,
            -100.3
          ],
          [
            262.7,
            -104.5
          ],
          [
            261,
            -105.5
          ],
          [
            249.2,
            -109.5
          ],
          [
            246.2,
            -111.4
          ],
          [
            245.3,
            -112.7
          ],
          [
            245.7,
            -115.6
          ],
          [
            250.4,
            -124.4
          ],
          [
            251,
            -127.6
          ],
          [
            250.9,
            -130.8
          ],
          [
            249.3,
            -133.1
          ],
          [
            247.4,
            -134.1
          ],
          [
            244.9,
            -134.6
          ],
          [
            232.4,
            -134.3
          ],
          [
            229.7,
            -133.6
          ],
          [
            220.5,
            -129.7
          ],
          [
            216.4,
            -127
          ],
          [
            212.5,
            -125.6
          ],
          [
            209.9,
            -125.6
          ],
          [
            207.7,
            -126.4
          ],
          [
            201.5,
            -133
          ],
          [
            190.9,
            -140.5
          ],
          [
            189.4,
            -141.5
          ],
          [
            186.3,
            -145.8
          ],
          [
            184.6,
            -149.9
          ],
          [
            184.8,
            -153.6
          ],
          [
            186.7,
            -158.9
          ],
          [
            191.4,
            -169.3
          ],
          [
            194.2,
            -178
          ],
          [
            194.8,
            -183.5
          ],
          [
            194.6,
            -185.7
          ],
          [
            186.4,
            -191.1
          ],
          [
            173,
            -196.8
          ],
          [
            170.7,
            -199.1
          ],
          [
            169.3,
            -201.9
          ],
          [
            169.2,
            -204.4
          ],
          [
            170.4,
            -206.9
          ],
          [
            174.7,
            -211.1
          ],
          [
            177.7,
            -215
          ],
          [
            180.1,
            -217.6
          ],
          [
            183.8,
            -220.4
          ],
          [
            186.2,
            -221.5
          ],
          [
            188.9,
            -223.6
          ],
          [
            190.3,
            -224.8
          ],
          [
            191.8,
            -227.8
          ],
          [
            194.2,
            -234.2
          ],
          [
            195.4,
            -240.4
          ],
          [
            195,
            -242.5
          ],
          [
            192.8,
            -243.4
          ],
          [
            190.3,
            -242.8
          ],
          [
            187,
            -240.6
          ],
          [
            182.7,
            -237.7
          ],
          [
            178.3,
            -235.6
          ],
          [
            174.8,
            -234.9
          ],
          [
            168.7,
            -235
          ],
          [
            166.6,
            -236
          ],
          [
            164.7,
            -237.5
          ],
          [
            163.3,
            -239.5
          ],
          [
            162.7,
            -242.1
          ],
          [
            163.1,
            -244.4
          ],
          [
            165.1,
            -249.9
          ],
          [
            168.1,
            -256.8
          ],
          [
            169.2,
            -260.3
          ],
          [
            169.2,
            -262.4
          ],
          [
            168,
            -266.3
          ],
          [
            166.1,
            -271.9
          ],
          [
            161.8,
            -282.5
          ],
          [
            159.5,
            -286.4
          ],
          [
            157.8,
            -287.6
          ],
          [
            156,
            -287
          ],
          [
            153.9,
            -284.9
          ],
          [
            150.1,
            -279.7
          ],
          [
            146.2,
            -274.8
          ],
          [
            142.1,
            -272.5
          ],
          [
            136.9,
            -271.7
          ],
          [
            131.9,
            -273.2
          ],
          [
            130,
            -274.9
          ],
          [
            129.1,
            -277.1
          ],
          [
            128.8,
            -279.3
          ],
          [
            129.2,
            -281.3
          ],
          [
            130,
            -283.6
          ],
          [
            132,
            -290.2
          ],
          [
            132.4,
            -294.6
          ],
          [
            134.7,
            -302.8
          ],
          [
            135.6,
            -304.6
          ],
          [
            141.7,
            -315
          ],
          [
            142.5,
            -317.2
          ],
          [
            142.1,
            -319.2
          ],
          [
            140.5,
            -320.7
          ],
          [
            137.7,
            -321.5
          ],
          [
            128.4,
            -322.1
          ],
          [
            124.5,
            -323
          ],
          [
            122.4,
            -324.1
          ],
          [
            120,
            -327.6
          ],
          [
            127.6,
            -339.4
          ],
          [
            128.8,
            -341.2
          ],
          [
            131,
            -342.3
          ],
          [
            132.1,
            -343.6
          ],
          [
            133,
            -346.3
          ],
          [
            131.6,
            -348.2
          ],
          [
            129.7,
            -350.1
          ],
          [
            127.2,
            -352
          ],
          [
            123.7,
            -358.4
          ],
          [
            120.4,
            -370.6
          ],
          [
            118.9,
            -377.6
          ],
          [
            118.7,
            -379.5
          ],
          [
            120.6,
            -388.4
          ],
          [
            122.5,
            -391.2
          ],
          [
            211.8,
            -441.8
          ],
          [
            213.6,
            -444.6
          ],
          [
            193.9,
            -524.5
          ],
          [
            162.6,
            -648
          ],
          [
            161.1,
            -651.8
          ],
          [
            156.7,
            -666
          ],
          [
            153.7,
            -677.1
          ],
          [
            154.2,
            -693.1
          ],
          [
            153.9,
            -699.5
          ],
          [
            153.1,
            -707.6
          ],
          [
            140.3,
            -765.2
          ],
          [
            137.9,
            -776
          ],
          [
            131.8,
            -805.3
          ],
          [
            123.3,
            -845.4
          ],
          [
            117.4,
            -868.5
          ],
          [
            106.8,
            -916.7
          ],
          [
            103.3,
            -933.2
          ],
          [
            94.8,
            -984.5
          ],
          [
            91.2,
            -1003.5
          ],
          [
            86.6,
            -1037.5
          ],
          [
            84,
            -1055.7
          ],
          [
            82.6,
            -1060.5
          ],
          [
            77.7,
            -1094.1
          ]
        ]
      }
    ]
  }
};
