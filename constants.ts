import type { AppData } from './types';

export const initialData: AppData = {
  "GENERAL": [
    { "type": "groupHeader", "descripcion": "GRUPO DE ALIMENTO: FRUTA" },
    { "type": "item", "id": 1000, "codigo": "2212004001", "descripcion": "CIRUELA ROJA", "unidad": "KG", "dias": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1001, "codigo": "2212004002", "descripcion": "CAÑA DE AZUCAR", "unidad": "PIEZA", "dias": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1002, "codigo": "2212004003", "descripcion": "CIRUELA AMARILLA", "unidad": "KG", "dias": [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0] },
    { "type": "item", "id": 1003, "codigo": "2212004005", "descripcion": "DURAZNO", "unidad": "KG", "dias": [30,30,0,30,0,30,0,30,0,30,30,0,30,0,30,30,0,30,0,30,30,0,30,0,30,0,0,30,0,30,0] },
    { "type": "item", "id": 1004, "codigo": "2212004006", "descripcion": "FRESA", "unidad": "KG", "dias": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1005, "codigo": "2212004006", "descripcion": "GUAYABA", "unidad": "KG", "dias": [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0] },
    { "type": "item", "id": 1006, "codigo": "2212004007", "descripcion": "JICAMA", "unidad": "KG", "dias": [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0] },
    { "type": "item", "id": 1007, "codigo": "2212004008", "descripcion": "LIMA", "unidad": "KG", "dias": [0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0] },
    { "type": "item", "id": 1008, "codigo": "2212004009", "descripcion": "MANDARINA", "unidad": "KG", "dias": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1009, "codigo": "2212004011", "descripcion": "MANZANA DELICIA", "unidad": "KG", "dias": [34,54,44,58,79,84,74,84,33,72,99,55,119,64,40,91,58,68,64,35,86,39,55,54,55,115,59,36,0,0] },
    { "type": "item", "id": 1010, "codigo": "2212004012", "descripcion": "MANZANA GOLDEN", "unidad": "KG", "dias": [34,54,44,58,79,84,74,84,33,72,99,55,119,64,40,106,58,68,64,35,86,39,55,54,55,115,59,36,0,0] },
    { "type": "item", "id": 1011, "codigo": "2212004013", "descripcion": "MELON CANTALUP", "unidad": "KG", "dias": [85,87,60,50,60,0,0,0,92,90,30,0,80,0,0,0,69,89,30,80,0,2,60,0,60,0,30,0,2,0,0] },
    { "type": "item", "id": 1012, "codigo": "2212004014", "descripcion": "NARANJA", "unidad": "KG", "dias": [0,2,50,0,45,30,0,20,48,50,0,45,0,0,65,45,30,30,0,0,33,50,45,0,30,0,47,0,0] },
    { "type": "item", "id": 1013, "codigo": "2212004015", "descripcion": "PAPAYA", "unidad": "KG", "dias": [62,75,80,62,75,45,62,80,75,50,75,45,80,75,89,62,45,62,62,75,80,75,45,80,0,80,0,0] },
    { "type": "item", "id": 1014, "codigo": "2212004016", "descripcion": "PERA", "unidad": "KG", "dias": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1015, "codigo": "2212004017", "descripcion": "PERA MANTEQUILLA", "unidad": "KG", "dias": [68,52,64,63,83,0,118,75,0,107,53,90,113,95,54,82,81,13,30,80,90,95,62,40,43,100,33,84,0,0] },
    { "type": "item", "id": 1016, "codigo": "2212004018", "descripcion": "PIÑA", "unidad": "KG", "dias": [71,43,0,0,43,0,0,0,47,0,50,0,0,0,0,43,45,23,45,45,26,45,45,23,45,28,0,0,0,0,0] },
    { "type": "item", "id": 1017, "codigo": "2212004019", "descripcion": "PLATANO MACHO", "unidad": "KG", "dias": [0,0,30,30,0,0,0,30,0,0,0,0,0,0,0,0,0,0,30,0,0,30,30,0,0,0,0,0,30,0,0] },
    { "type": "item", "id": 1018, "codigo": "2212004020", "descripcion": "PLATANO ROATAN", "unidad": "KG", "dias": [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,0,0,0,0] },
    { "type": "item", "id": 1019, "codigo": "2212004021", "descripcion": "SANDIA", "unidad": "KG", "dias": [0,60,25,0,0,30,30,0,20,0,60,0,0,30,0,60,0,0,0,30,0,0,60,30,0,33,0,0,0,0] },
    { "type": "item", "id": 1020, "codigo": "2212004022", "descripcion": "TEJOCOTE", "unidad": "KG", "dias": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1021, "codigo": "2212004023", "descripcion": "TORONJA", "unidad": "KG", "dias": [0,0,3,0,0,0,0,0,0,1,3,0,0,0,0,3,0,0,0,0,0,1,3,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1022, "codigo": "2212004024", "descripcion": "DURAZNO PERSICON", "unidad": "KG", "dias": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1023, "codigo": "2212004025", "descripcion": "PLATANO DOMINICO", "unidad": "KG", "dias": [0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,30,0,2,0,0,0] },
    { "type": "item", "id": 1024, "codigo": "2212004029", "descripcion": "UVA GLOBO", "unidad": "KG", "dias": [0,1,0,0,0,0,0,0,0,0,0,24,0,0,0,1,0,0,0,0,0,24,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1025, "codigo": "2212004030", "descripcion": "UVA VERDE", "unidad": "KG", "dias": [0,0,0,24,0,0,0,24,0,0,0,0,0,0,0,0,0,0,24,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1026, "codigo": "2212004031", "descripcion": "MANGO BARRANQUEÑO", "unidad": "KG", "dias": [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0] },
    { "type": "item", "id": 1027, "codigo": "2212004032", "descripcion": "CIRUELA PASA SIN HUESO", "unidad": "KG", "dias": [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1028, "codigo": "2212004034", "descripcion": "UVA PASA ROJA", "unidad": "KG", "dias": [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1029, "codigo": "2212004035", "descripcion": "TUNA", "unidad": "KG", "dias": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1030, "codigo": "2212004038", "descripcion": "GRANADA CHINA", "unidad": "PIEZA", "dias": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "groupHeader", "descripcion": "GRUPO DE ALIMENTO: VERDURA" },
    { "type": "item", "id": 1031, "codigo": "2212010003", "descripcion": "CHILE JALAPEÑO", "unidad": "KG", "dias": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1032, "codigo": "2212010004", "descripcion": "CHAMPIÑONES", "unidad": "KG", "dias": [0,40,0,0,18,0,0,0,0,0,0,0,0,0,0,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1033, "codigo": "2212010005", "descripcion": "TE DE LIMON", "unidad": "MANOJO", "dias": [0,2,0,2,0,1,2,0,2,0,2,1,1,0,2,0,2,1,0,2,0,2,0,1,2,0,0,1,2,0,0] },
    { "type": "item", "id": 1034, "codigo": "2212010006", "descripcion": "TOMILLO FRESCO", "unidad": "MANOJO", "dias": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1035, "codigo": "2212004006", "descripcion": "ACELGA", "unidad": "KG", "dias": [0,0,3,0,0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1036, "codigo": "2212001006", "descripcion": "AGUACATE", "unidad": "KG", "dias": [12,2,19,0,0,19,0,0,19,2,0,12,0,0,5,0,17,5,0,5,2,14,0,0,0,0,0,6,0,0] },
    { "type": "item", "id": 1037, "codigo": "2212001009", "descripcion": "APIO", "unidad": "MANOJO", "dias": [0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0] },
    { "type": "item", "id": 1038, "codigo": "2212001010", "descripcion": "BETABEL", "unidad": "MANOJO", "dias": [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1039, "codigo": "2212001011", "descripcion": "BROCOLI", "unidad": "KG", "dias": [0,1,0,0,0,10,1,0,0,0,0,0,0,0,0,0,0,20,0,0,1,10,0,0,1,0,0,0,0,0] },
    { "type": "item", "id": 1040, "codigo": "2212001012", "descripcion": "CALABAZA ITALIANA", "unidad": "KG", "dias": [113,110,53,106,41,53,82,37,92,94,155,52,55,27,79,73,43,105,52,60,31,82,38,96,115,62,32,95,0,0] },
    { "type": "item", "id": 1041, "codigo": "2212001013", "descripcion": "CALABAZA DURA", "unidad": "PIEZA", "dias": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1042, "codigo": "2212001014", "descripcion": "CAMOTE AMARILLO", "unidad": "KG", "dias": [0,0,0,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1043, "codigo": "2212001015", "descripcion": "CEBOLLA BLANCA", "unidad": "KG", "dias": [38,32,35,33,22,21,29,33,41,40,18,20,26,9,18,4,31,34,22,25,34,30,38,33,27,39,35,25,31,0] },
    { "type": "item", "id": 1044, "codigo": "2212001016", "descripcion": "CEBOLLA CAMBRAY", "unidad": "MANOJO", "dias": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1045, "codigo": "2212001017", "descripcion": "CEBOLLA MORADA", "unidad": "KG", "dias": [0,1,0,0,0,0,0,0,0,1,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0] },
    { "type": "item", "id": 1046, "codigo": "2212001019", "descripcion": "CHAYOTE SQUASH PIEZA DE 400GR C/U", "unidad": "KG", "dias": [43,98,79,110,91,68,62,115,91,128,89,145,52,62,109,51,108,86,113,57,53,136,72,132,79,35,82,113,134,0] },
    { "type": "item", "id": 1047, "codigo": "2212001020", "descripcion": "CHILE CHILACA", "unidad": "KG", "dias": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1048, "codigo": "2212001021", "descripcion": "CHILE PIMIENTO MORRON ROJO", "unidad": "KG", "dias": [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1049, "codigo": "2212001022", "descripcion": "CHILE PIMIENTO MORRON VERDE", "unidad": "KG", "dias": [0,5,1,3,0,0,0,0,0,1,2,0,0,0,0,0,0,0,0,3,0,1,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 1050, "codigo": "2212001023", "descripcion": "CHILE POBLANO", "unidad": "KG", "dias": [0,6,2,0,0,0,5,0,0,0,0,0,0,0,0,3,0,0,0,0,0,3,2,0,0,3,2,0,3,0,0] },
    { "type": "item", "id": 1051, "codigo": "2212001024", "descripcion": "CHILE SERRANO", "unidad": "KG", "dias": [1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,2,1,1,0,0,0,0,0,1,0] }
  ],
  "COMEDOR": [
    { "type": "groupHeader", "descripcion": "GRUPO DE ALIMENTO: FRUTA" },
    { "type": "item", "id": 400, "codigo": "2212004001", "descripcion": "CIRUELA ROJA", "unidad": "KG", "dias": Array(31).fill(0) },
    { "type": "groupHeader", "descripcion": "GRUPO DE ALIMENTO: VERDURA" },
    { "type": "item", "id": 401, "codigo": "2212004006", "descripcion": "ACELGA", "unidad": "MANOJO", "dias": [0,0,3,0,0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 402, "codigo": "2212001006", "descripcion": "AJO", "unidad": "KILO", "dias": [1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "groupHeader", "descripcion": "GRUPO DE ALIMENTO: CARNES" },
    { "type": "item", "id": 403, "codigo": "2212001186", "descripcion": "ATUN EN AGUA 1880GR", "unidad": "LATA", "dias": [0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0] }
  ],
  "PACIENTES": [
    { "type": "groupHeader", "descripcion": "GRUPO DE ALIMENTO: FRUTA" },
    { "type": "item", "id": 300, "codigo": "2212004001", "descripcion": "CIRUELA ROJA", "unidad": "KG", "dias": Array(31).fill(0) },
    { "type": "groupHeader", "descripcion": "GRUPO DE ALIMENTO: CARNES" },
    { "type": "item", "id": 301, "codigo": "2212001186", "descripcion": "ATUN EN AGUA 1880GR", "unidad": "LATA", "dias": [0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] }
  ],
  "BANCO DE LECHE": [
    { "type": "groupHeader", "descripcion": "Banco de Leche" },
    { "type": "item", "id": 700, "codigo": "2212012004", "descripcion": "FORMULA LIQUIDA PARA PREMATUROS DE 24 KCAL/OZ FRASCO DE 88.5 ML", "unidad": "FCO", "dias": [1408,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 701, "codigo": "2212012005", "descripcion": "FORMULA INFANTIL INICIO P/LACTANTES 400GR", "unidad": "LATA", "dias": [0,0,0,300,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    { "type": "item", "id": 702, "codigo": "2212012007", "descripcion": "FORMULA INFANTIL CONTINUACION", "unidad": "LATA", "dias": [0,0,0,200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] }
  ],
  "NUTRICIÓN CLÍNICA": [
    { "type": "groupHeader", "descripcion": "Nutrición Clínica" },
    { "type": "item", "id": 800, "codigo": "2212004011", "descripcion": "MANZANA DELICIA", "unidad": "KG", "dias": [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,0,0] },
    { "type": "item", "id": 801, "codigo": "2212004020", "descripcion": "PLATANO ROATAN", "unidad": "KG", "dias": [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,0,0] },
    { "type": "item", "id": 802, "codigo": "2212001196", "descripcion": "LECHE DESLACTOSADA LIGHT LITRO", "unidad": "LITRO", "dias": [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0] }
  ],
  "DIETOLOGÍA(S)": [
    { "type": "groupHeader", "descripcion": "GRUPO DE ALIMENTO: FRUTA" },
    { "type": "item", "id": 600, "codigo": "2212004003", "descripcion": "CIRUELA AMARILLA", "unidad": "KG", "dias": [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0] }
  ],
  "JORNADA": [
    { "type": "groupHeader", "descripcion": "GRUPO DE ALIMENTO: FRUTA" },
    { "type": "item", "id": 500, "codigo": "2212004001", "descripcion": "CIRUELA ROJA", "unidad": "KG", "dias": Array(31).fill(0) },
    { "type": "groupHeader", "descripcion": "GRUPO DE ALIMENTO: CARNES" },
    { "type": "item", "id": 501, "codigo": "2212001186", "descripcion": "ATUN EN AGUA 1880GR", "unidad": "LATA", "dias": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0] }
  ],
  "RECEPCIÓN": [
    { "type": "groupHeader", "descripcion": "GRUPO DE ALIMENTO: FRUTA" },
    { "type": "item", "id": 200, "codigo": "2212004001", "descripcion": "CIRUELA ROJA", "unidad": "KG", "dias": Array(31).fill(0) },
    { "type": "item", "id": 201, "codigo": "2212004002", "descripcion": "CAÑA DE AZUCAR", "unidad": "PIEZA", "dias": Array(31).fill(0) },
    { "type": "item", "id": 202, "codigo": "2212004003", "descripcion": "CIRUELA AMARILLA", "unidad": "KG", "dias": [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0] }
  ]
};

export const SHEET_NAMES = [
  "GENERAL", 
  "COMEDOR", 
  "PACIENTES", 
  "BANCO DE LECHE", 
  "NUTRICIÓN CLÍNICA", 
  "DIETOLOGÍA(S)", 
  "JORNADA", 
  "RECEPCIÓN"
];
