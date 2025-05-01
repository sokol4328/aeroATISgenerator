const airportData = {
    aesir: [
        {
            name: "Riziere Intrernational",
            icao: "CRIZ",
            stations: [
                {
                    type: "DEL",
                    frequency: "128.500",
                },
                {
                    type: "GND",
                    frequency: "128.300",
                },
                {
                    type: "TWR",
                    frequency: "122.300",
                },
                {
                    type: "APP",
                    frequency: "125.900",
                },
                {
                    type: "DEP",
                    frequency: "124.600",
                },
            ],
            runways: ['09', '27', '03', '21'],
            runwaySpecs: [
                {
                    id: '09/27',
                    courses: '085/265',
                    length: 12000, // feet,
                    ils: true, // whether runway has ils equipped
                },
                {
                    id: '03/21',
                    courses: '031/211',
                    length: 12000, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Tikaranto City",
            icao: "CTCA",
            stations: [
                {
                    type: "DEL",
                    frequency: "118.275",
                },
                {
                    type: "GND",
                    frequency: "121.800",
                },
                {
                    type: "TWR",
                    frequency: "119.925",
                },
            ],
            runways: ['13', '31', '15', '33'],
            runwaySpecs: [
                {
                    id: '13/31',
                    courses: '133/313',
                    length: "N/A", // feet,
                    ils: false, // whether runway has ils equipped
                },
                {
                    id: '15/33',
                    courses: '152/333',
                    length: "N/A", // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Tikaranto International",
            icao: "CTIK",
            stations: [
                {
                    type: "DEL",
                    frequency: "121.300",
                },
                {
                    type: "1_GND",
                    frequency: "121.900",
                },
                {
                    type: "2_GND",
                    frequency: "121.650",
                },
                {
                    type: "3_GND",
                    frequency: "119.100",
                },
                {
                    type: "1_TWR",
                    frequency: "118.350",
                },
                {
                    type: "2_TWR",
                    frequency: "118.700",
                },
            ],
            runways: ['07L', '25R', '07C', '25C', '07R', '25L', '16L', '34R', '16R', '34L'],
            runwaySpecs: [
                {
                    id: '07L/25R',
                    courses: '070/250',
                    length: "N/A", // feet,
                    ils: true, // whether runway has ils equipped
                },
                {
                    id: '07C/25C',
                    courses: '070/250',
                    length: "N/A", // feet,
                    ils: true, // whether runway has ils equipped
                },
                {
                    id: '07R/25L',
                    courses: '070/250',
                    length: "N/A", // feet,
                    ils: true, // whether runway has ils equipped
                },
                {
                    id: '16L/34R',
                    courses: '160/340',
                    length: "N/A", // feet,
                    ils: true, // whether runway has ils equipped
                },
                {
                    id: '16R/34L',
                    courses: '160/340',
                    length: "N/A", // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Unity Transport Hub",
            icao: "CUTH",
            stations: [
                {
                    type: "GND",
                    frequency: "121.350",
                },
                {
                    type: "TWR",
                    frequency: "119.700",
                },
            ],
            runways: ['14', '32'],
            runwaySpecs: [
                {
                    id: '14/32',
                    courses: '138/318',
                    length: "N/A", // feet,
                    ils: true, // whether runway has ils equipped
                    ODopps: true, // whether runway has opposite direction ops
                },
            ],
        },
        {
            name: "Venfjord",
            icao: "CVFA",
            stations: [
                {
                    type: "GND",
                    frequency: "121.700",
                },
                {
                    type: "TWR",
                    frequency: "119.600",
                },
            ],
            runways: ['12', '30'],
            runwaySpecs: [
                {
                    id: '12/30',
                    courses: '120/300',
                    length: "N/A", // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Ryvinsk",
            icao: "EFTV",
            stations: [
            ],
            runways: ['12', '30'],
            runwaySpecs: [
                {
                    id: '12/30',
                    courses: '120/300',
                    length: 7898, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Asgard",
            icao: "KGZI",
            stations: [
                {
                    type: "TWR",
                    frequency: "128.500",
                },
            ],
            runways: ['10', '28'],
            runwaySpecs: [
                {
                    id: '10/28',
                    courses: '100/280',
                    length: 4300, // feet,
                    ils: false, // whether runway has ils equipped
                },
            ],
        },
    ],
    Alavega: [
        {
            name: "Santa Mortica",
            icao: "SCSM",
            stations: [
                {
                    type: "DEL",
                    frequency: "121.500",
                },
                {
                    type: "GND",
                    frequency: "121.900",
                },
                {
                    type: "TWR",
                    frequency: "118.100",
                },
                {
                    type: "APP",
                    frequency: "128.300",
                },
            ],
            runways: ['08', '26'],
            runwaySpecs: [
                {
                    id: '08/26',
                    courses: '080/260',
                    length: "N/A", // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Cantaloa International",
            icao: "SCTL",
            stations: [
                {
                    type: "DEL",
                    frequency: "118.900",
                },
                {
                    type: "GND",
                    frequency: "121.850",
                },
                {
                    type: "TWR",
                    frequency: "118.350",
                },
            ],
            runways: ['05L', '05R', '23L', '23R'],
            runwaySpecs: [
                {
                    id: '05L/23R',
                    courses: '049/231',
                    length: 12500, // feet,
                    ils: true, // whether runway has ils equipped
                },
                {
                    id: '05R/23L',
                    courses: '049/231',
                    length: 12500, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Grafoso",
            icao: "SKGF",
            stations: [
                {
                    type: "TWR",
                    frequency: "118.350",
                },
            ],
            runways: ['10', '28'],
            runwaySpecs: [
                {
                    id: '10/28',
                    courses: '100/280',
                    length: 5340, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Fidalgueira",
            icao: "SLGF",
            stations: [
            ],
            runways: ['07', '25'],
            runwaySpecs: [
                {
                    id: '07/25',
                    courses: '067/247',
                    length: "N/A", // feet,
                    ils: false, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Kaieteur Regional",
            icao: "SYKT",
            stations: [
                {
                    type: "GND",
                    frequency: "121.600",
                },
                {
                    type: "TWR",
                    frequency: "128.550",
                },
            ],
            runways: ['18', '36'],
            runwaySpecs: [
                {
                    id: '18/36',
                    courses: '180/360',
                    length: 4861, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Hipe International",
            icao: "SYPH",
            stations: [
                {
                    type: "GND",
                    frequency: "121.700",
                },
                {
                    type: "TWR",
                    frequency: "118.300",
                },
            ],
            runways: ['05', '23', '18', '36'],
            runwaySpecs: [
                {
                    id: '05/23',
                    courses: '045/225',
                    length: 4994, // feet,
                    ils: false, // whether runway has ils equipped
                },
                {
                    id: '18/36',
                    courses: '180/360',
                    length: 9990, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
    ],
    avalon: [
        {
            name: "Manleigh",
            icao: "AMGH",
            iata: "MLH",
            stations: [
                {
                    type: "GND",
                    frequency: "128.655",
                },
                {
                    type: "TWR",
                    frequency: "130.150",
                },
                {
                    type: "APP",
                    frequency: "135.880",
                },
            ],
            runways: ['04', '22'],
            runwaySpecs: [
                {
                    id: '04/22',
                    courses: '040/220',
                    length: "N/A", // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Trivlon Airfield",
            icao: "ATRI",
            stations: [
                {
                    type: "TWR",
                    frequency: "119.555",
                }
            ],
            runways: ['02', '20', '08', '26', '14', '32'],
            runwaySpecs: [
                {
                    id: '02/20',
                    courses: '022/202',
                    length: 3646, // feet,
                    ils: false, // whether runway has ils equipped
                },
                {
                    id: '08/26',
                    courses: '082/262',
                    length: 4253, // feet,
                    ils: false, // whether runway has ils equipped
                },
                {
                    id: '14/32',
                    courses: '142/322',
                    length: 3646, // feet,
                    ils: false, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Tarquay",
            icao: "ATRQ",
            stations: [
                {
                    type: "TWR",
                    frequency: "118.330",
                },
                {
                    type: "APP",
                    frequency: "125.155",
                },
            ],
            runways: ['05', '23'],
            runwaySpecs: [
                {
                    id: '05/23',
                    courses: '050/230',
                    length: "N/A", // feet,
                    ils: false, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Sandris",
            icao: "EDSA",
            stations: [
                {
                    type: "DEL",
                    frequency: "121.605",
                },
                {
                    type: "GND",
                    frequency: "129.505",
                },
                {
                    type: "TWR",
                    frequency: "120.030",
                },
                {
                    type: "APP",
                    frequency: "119.620",
                },
                {
                    type: "DEP",
                    frequency: "119.500",
                },
            ],
            runways: ['15R', '33L', '15L', '33R'],
            runwaySpecs: [
                {
                    id: '15R/33L',
                    courses: '150/330',
                    length: "N/A", // feet,
                    ils: true, // whether runway has ils equipped
                },
                {
                    id: '15L/33R',
                    courses: '150/330',
                    length: "N/A", // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Auchenburgh",
            icao: "EGAB",
            stations: [
                {
                    type: "GND",
                    frequency: "121.755",
                },
                {
                    type: "TWR",
                    frequency: "118.705",
                },
                {
                    type: "APP",
                    frequency: "121.205",
                },
            ],
            runways: ['12', '30'],
            runwaySpecs: [
                {
                    id: '12/30',
                    courses: '120/300',
                    length: 8385, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Anhedral International",
            icao: "EGAI",
            iata: "LHR",
            stations: [
                {
                    type: "DEL",
                    frequency: "121.980",
                },
                {
                    type: "1_GND",
                    frequency: "121.855",
                },
                {
                    type: "2_GND",
                    frequency: "121.705",
                },
                {
                    type: "3_GND",
                    frequency: "121.905",
                },
                {
                    type: "E_TWR",
                    frequency: "118.505",
                },
                {
                    type: "W_TWR",
                    frequency: "118.705",
                },
            ],
            runways: ['03L', '21R', '03R', '21L'],
            runwaySpecs: [
                {
                    id: '03L/21R',
                    courses: '035/215',
                    length: 12801, // feet,
                    ils: true, // whether runway has ils equipped
                },
                {
                    id: '03R/21L',
                    courses: '035/215',
                    length: 12007, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Anhedral City",
            icao: "EGAN",
            iata: "ANC",
            stations: [
                {
                    type: "GND",
                    frequency: "121.830",
                },
                {
                    type: "TWR",
                    frequency: "118.080",
                },
            ],
            runways: ['03', '21'],
            runwaySpecs: [
                {
                    id: '03/21',
                    courses: '030/210',
                    length: 2568, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Bokingham",
            icao: "EGBH",
            iata: "BOK",
            stations: [
                {
                    type: "INF",
                    frequency: "122.305",
                },
            ],
            runways: ['17', '35'],
            runwaySpecs: [
                {
                    id: '17/35',
                    courses: '166/346',
                    length: 4380, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "East cove airfield",
            icao: "EGEC",
            stations: [
                {
                    type: "TWR",
                    frequency: "125.355",
                },
            ],
            runways: ['03', '21', '07', '25', '13', '31'],
            runwaySpecs: [
                {
                    id: '03/21',
                    courses: '030/210',
                    length: 1860, // feet,
                    ils: false, // whether runway has ils equipped
                },
                {
                    id: '07/25',
                    courses: '070/250',
                    length: 5052, // feet,
                    ils: true, // whether runway has ils equipped
                },
                {
                    id: '13/31',
                    courses: '130/310',
                    length: 4678, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Lionham",
            icao: "EGLH",
            stations: [
                {
                    type: "GND",
                    frequency: "121.730",
                },
                {
                    type: "TWR",
                    frequency: "123.730",
                },
                {
                    type: "OPS",
                    frequency: "130.075",
                }
            ],
            runways: ['18', '36'],
            runwaySpecs: [
                {
                    id: '18/36',
                    courses: '180/360',
                    length: 10007, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Oakport",
            icao: "EGOP",
            stations: [
                {
                    type: "GND",
                    frequency: "121.905",
                },
                {
                    type: "TWR",
                    frequency: "124.005",
                },
                {
                    type: "APP",
                    frequency: "134.180",
                },
            ],
            runways: ['12', '30'],
            runwaySpecs: [
                {
                    id: '12/30',
                    courses: '120/300',
                    length: 9495, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Gutke Regional",
            icao: "EHGA",
            stations: [
                {
                    type: "GND",
                    frequency: "122.180",
                },
                {
                    type: "TWR",
                    frequency: "118.205",
                },
                {
                    type: "APP",
                    frequency: "122.990",
                },
            ],
            runways: ['12', '30'],
            runwaySpecs: [
                {
                    id: '12/30',
                    courses: '120/300',
                    length: 7250, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Corbaun",
            icao: "EICB",
            stations: [
                {
                    type: "GND",
                    frequency: "121.800",
                },
                {
                    type: "TWR",
                    frequency: "118.7",
                },
                {
                    type: "APP",
                    frequency: "121.400",
                },
            ],
            runways: ['14', '32'],
            runwaySpecs: [
                {
                    id: '14/32',
                    courses: '136/316',
                    length: 10495, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Yuripa",
            icao: "LIBY",
            stations: [
                "NONE"
            ],
            runways: ['11', '29'],
            runwaySpecs: [
                {
                    id: '11/28',
                    courses: '109/298',
                    length: 11811, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Unserdan",
            icao: "LDUA",
            stations: [
                {
                    type: "TWR",
                    frequency: "123.325",
                },
                {
                    type: "APP",
                    frequency: "121.400",
                },
            ],
            runways: ['03', '21'],
            runwaySpecs: [
                {
                    id: '03/21',
                    courses: '027/207',
                    length: 8366, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Valois",
            icao: "LFVI",
            stations: [
                {
                    type: "DEL",
                    frequency: "135.505",
                },
                {
                    type: "GND",
                    frequency: "120.405",
                },
                {
                    type: "TWR",
                    frequency: "118.100",
                },
                {
                    type: "APP",
                    frequency: "120.900",
                },
            ],
            runways: ['02', '20'],
            runwaySpecs: [
                {
                    id: '02/20',
                    courses: '024/204',
                    length: 13123, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Hemeos",
            icao: "LGHE",
            stations: [
                {
                    type: "DEL",
                    frequency: "129.175",
                },
                {
                    type: "GND",
                    frequency: "121.700",
                },
                {
                    type: "TWR",
                    frequency: "120.850",
                },
            ],
            runways: ['09', '27', '12', '30'],
            runwaySpecs: [
                {
                    id: '09/27',
                    courses: '091/271',
                    length: 8904, // feet,
                    ils: true, // whether runway has ils equipped
                },
                {
                    id: '12/30',
                    courses: '122/302',
                    length: 5138, // feet,
                    ils: false, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Pavlada",
            icao: "LGPL",
            stations: [
                {
                    type: "TWR",
                    frequency: "123.250",
                },
                {
                    type: "APP",
                    frequency: "126.050",
                },
            ],
            runways: ['12', '30'],
            runwaySpecs: [
                {
                    id: '12/30',
                    courses: '125/305',
                    length: 5341, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "CAPRIANO",
            icao: "LICR",
            stations: [
                {
                    type: "GND",
                    frequency: "121.850",
                },
                {
                    type: "TWR",
                    frequency: "119.100",
                },
                {
                    type: "APP",
                    frequency: "118.750",
                },
            ],
            runways: ['01', '19'],
            runwaySpecs: [
                {
                    id: '01/30',
                    courses: '011/191',
                    length: 5741, // feet,
                    ils: false, // whether runway has ils equipped
                    ODopps: true, // whether runway has opposite direction ops
                },
            ],
        },
        {
            name: "Ebenrau",
            icao: "LIEA",
            stations: [
                {
                    type: "TWR",
                    frequency: "120.100",
                },
            ],
            runways: ['10', '28'],
            runwaySpecs: [
                {
                    id: '10/28',
                    courses: '186/266',
                    length: 6562, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Seilam",
            icao: "LISA",
            stations: [
                {
                    type: "DEL",
                    frequency: "119.855",
                },
                {
                    type: "GND",
                    frequency: "121.655",
                },
                {
                    type: "TWR",
                    frequency: "118.135",
                },
            ],
            runways: ['06', '24'],
            runwaySpecs: [
                {
                    id: '06/24',
                    courses: '065/245',
                    length: 10938, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Amaras",
            icao: "LPAA",
            stations: [
                {
                    type: "TWR",
                    frequency: "124.660",
                },
            ],
            runways: ['14', '32'],
            runwaySpecs: [
                {
                    id: '14/32',
                    courses: '135/315',
                    length: 9100, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Porto Menezes",
            icao: "LPMM",
            stations: [
                {
                    type: "DEL",
                    frequency: "121.850",
                },
                {
                    type: "GND",
                    frequency: "121.700",
                },
                {
                    type: "TWR",
                    frequency: "118.700",
                },
            ],
            runways: ['09', '27'],
            runwaySpecs: [
                {
                    id: '09/27',
                    courses: '091/271',
                    length: 10404, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
    ],
    leovetsk : [
        {
            name: "Eisenhardt AFB",
            icao: "CNAB",
            stations: [
                {
                    type: "GND",
                    frequency: "118.260",
                },
                {
                    type: "TWR",
                    frequency: "119.350",
                },
                {
                    type: "APP",
                    frequency: "121.445",
                },
                {
                    type: "CTR",
                    frequency: "132.100",
                },
            ],
            runways: ['05', '23'],
            runwaySpecs: [
                {
                    id: '05/23',
                    courses: '056/236',
                    length: 9180, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Leovetsk International",
            icao: "ULIA",
            stations: [
                {
                    type: "GND",
                    frequency: "120.700",
                },
                {
                    type: "TWR",
                    frequency: "131.500",
                },
                {
                    type: "APP",
                    frequency: "119.300",
                },
                {
                    type: "DEP",
                    frequency: "120.400",
                },
                {
                    type: "CTR",
                    frequency: "132.100",
                },
            ],
            runways: ['07L', '07C', '07R', '25L', '25C', '25R'],
            runwaySpecs: [
                {
                    id: '07L/25R',
                    courses: '070/250',
                    length: "N/A", // feet,
                    ils: true, // whether runway has ils equipped
                },
                {
                    id: '07C/25C',
                    courses: '070/250',
                    length: "N/A", // feet,
                    ils: true, // whether runway has ils equipped
                },
                {
                    id: '07R/25L',
                    courses: '070/250',
                    length: "N/A", // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Novoaralsk AFB",
            icao: "UNFB",
            stations: [
                {
                    type: "DEL",
                    frequency: "119.420",
                },
                {
                    type: "GND",
                    frequency: "119.700",
                },
                {
                    type: "TWR",
                    frequency: "120.250",
                },
                {
                    type: "CTR",
                    frequency: "132.100",
                },
            ],
            runways: ['10', '28'],
            runwaySpecs: [
                {
                    id: '10/28',
                    courses: '105/285',
                    length: "N/A", // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
    ],
    enoksen : [
        {
            name: "Oskufloi International",
            icao: "BIOA",
            stations: [
                {
                    type: "DEL",
                    frequency: "121.000",
                },
                {
                    type: "GND",
                    frequency: "121.900",
                },
                {
                    type: "TWR",
                    frequency: "118.300",
                },
                {
                    type: "APP",
                    frequency: "119.300",
                },
            ],
            runways: ['06', '24', '15', '33'],
            runwaySpecs: [
                {
                    id: '06/24',
                    courses: '065/245',
                    length: 10020, // feet,
                    ils: true, // whether runway has ils equipped
                },
                {
                    id: '15/33',
                    courses: '155/335',
                    length: 10056, // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
        {
            name: "Enoksen Regional",
            icao: "EKNO",
            stations: [
                {
                    type: "GND",
                    frequency: "121.705",
                },
                {
                    type: "TWR",
                    frequency: "120.600",
                },
            ],
            runways: ['07', '25'],
            runwaySpecs: [
                {
                    id: '07/25',
                    courses: '070/250',
                    length: "N/A", // feet,
                    ils: true, // whether runway has ils equipped
                },
            ],
        },
    ]
};