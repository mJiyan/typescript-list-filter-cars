const defaultState = {
    make: 'Ford',
    makes: [
        "ALFA ROMEO",
        "AUDI",
        "AUSTIN",
        "BARKAS",
        "BMW",
        "CADILLAC",
        "CHEVROLET",
        "CHRYSLER",
        "CITROEN",
        "CORVETTE",
        "DACIA",
        "DAEWOO",
        "DAF",
        "DAIHATSU",
        "DODGE",
        "FIAT",
        "FORD",
        "HDPIC",
        "HONDA",
        "HYUNDAI",
        "INFINITI",
        "ISUZU",
        "IVECO",
        "JAGUAR",
        "JEEP",
        "KIA",
        "LADA",
        "LANCIA",
        "LAND ROVER",
        "LANDWIND",
        "LDV",
        "LEXUS",
        "MAZDA",
        "MERCEDES-BENZ",
        "MG",
        "MINI (BMW)",
        "MINI (ROVER)",
        "MITSUBISHI",
        "NISSAN",
        "OPEL",
        "PEUGEOT",
        "PONTIAC",
        "PORSCHE",
        "PROTON",
        "RENAULT",
        "ROVER",
        "SAAB",
        "SEAT",
        "SKODA",
        "SMART",
        "SSANGYONG",
        "SUBARU",
        "SUZUKI",
        "TALBOT",
        "TATA",
        "TESLA",
        "TOYOTA",
        "VOLVO",
        "VW"
    ],
    models: [
        "B-MAX",
        "C-Max",
        "Cougar",
        "Econovan",
        "ECOSPORT",
        "Edge",
        "Escort",
        "Explorer",
        "Fiesta",
        "Fiesta Courier",
        "Focus",
        "Focus C-Max",
        "Fusion",
        "Galaxy",
        "KA",
        "Kuga",
        "Maverick",
        "Mondeo",
        "Mustang",
        "Orion",
        "Probe",
        "Puma",
        "Scorpio",
        "Sierra",
        "S-Max",
        "Streetka",
        "Tourneo Connect",
        "Tourneo Courier",
        "Transit",
        "Transit Connect",
        "Transit Courier",
        "Transit Custom",
        "Windstar"
    ],
    vehicles: [
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 60,
            "enginePowerKW": 44,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1299
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 68,
            "enginePowerKW": 50,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1399
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 75,
            "enginePowerKW": 55,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1242
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 80,
            "enginePowerKW": 59,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1388
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 101,
            "enginePowerKW": 74,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1596
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 90,
            "enginePowerKW": 66,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1560
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 60,
            "enginePowerKW": 44,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1299
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 50,
            "enginePowerKW": 37,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1119
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 95,
            "enginePowerKW": 70,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1560
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 75,
            "enginePowerKW": 55,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1753
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 54,
            "enginePowerKW": 40,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1097
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 75,
            "enginePowerKW": 55,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1753
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 50,
            "enginePowerKW": 37,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1097
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 131,
            "enginePowerKW": 96,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1796
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 90,
            "enginePowerKW": 66,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1388
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 105,
            "enginePowerKW": 77,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1796
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 73,
            "enginePowerKW": 54,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1391
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 90,
            "enginePowerKW": 66,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1388
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 60,
            "enginePowerKW": 44,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1753
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 103,
            "enginePowerKW": 76,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1598
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 71,
            "enginePowerKW": 52,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1391
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 69,
            "enginePowerKW": 51,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1299
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 60,
            "enginePowerKW": 44,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1299
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 68,
            "enginePowerKW": 50,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1399
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 75,
            "enginePowerKW": 55,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1242
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 80,
            "enginePowerKW": 59,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1388
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 101,
            "enginePowerKW": 74,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1596
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 90,
            "enginePowerKW": 66,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1560
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 150,
            "enginePowerKW": 110,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1999
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 200,
            "enginePowerKW": 147,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1596
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 69,
            "enginePowerKW": 51,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1299
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 60,
            "enginePowerKW": 44,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1299
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 88,
            "enginePowerKW": 65,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1597
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 73,
            "enginePowerKW": 54,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1391
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 71,
            "enginePowerKW": 52,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1399
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 54,
            "enginePowerKW": 40,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1119
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 50,
            "enginePowerKW": 37,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1119
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 73,
            "enginePowerKW": 54,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1368
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 103,
            "enginePowerKW": 76,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1596
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 75,
            "enginePowerKW": 55,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1242
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 60,
            "enginePowerKW": 44,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1753
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 50,
            "enginePowerKW": 37,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1299
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 60,
            "enginePowerKW": 44,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1299
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 75,
            "enginePowerKW": 55,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1242
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 88,
            "enginePowerKW": 65,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1597
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 60,
            "enginePowerKW": 44,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1753
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 101,
            "enginePowerKW": 74,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 998
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 125,
            "enginePowerKW": 92,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 998
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 140,
            "enginePowerKW": 103,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 998
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 49,
            "enginePowerKW": 36,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1087
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 71,
            "enginePowerKW": 52,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1084
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 50,
            "enginePowerKW": 37,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1087
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 45,
            "enginePowerKW": 33,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 935
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 86,
            "enginePowerKW": 63,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1084
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 86,
            "enginePowerKW": 63,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1499
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 101,
            "enginePowerKW": 74,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 998
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 120,
            "enginePowerKW": 88,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1499
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 125,
            "enginePowerKW": 92,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 998
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 105,
            "enginePowerKW": 77,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1596
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 75,
            "enginePowerKW": 55,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1499
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 80,
            "enginePowerKW": 59,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 998
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 97,
            "enginePowerKW": 71,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1567
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 65,
            "enginePowerKW": 48,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 998
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 54,
            "enginePowerKW": 40,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1597
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 69,
            "enginePowerKW": 51,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1271
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 105,
            "enginePowerKW": 77,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1796
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 131,
            "enginePowerKW": 96,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1796
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 50,
            "enginePowerKW": 37,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1299
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 60,
            "enginePowerKW": 44,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1299
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 182,
            "enginePowerKW": 134,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1596
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 135,
            "enginePowerKW": 99,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1596
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 95,
            "enginePowerKW": 70,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1567
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 75,
            "enginePowerKW": 55,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1368
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 71,
            "enginePowerKW": 52,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1368
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 90,
            "enginePowerKW": 66,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1560
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 150,
            "enginePowerKW": 110,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1999
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 90,
            "enginePowerKW": 66,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1560
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 73,
            "enginePowerKW": 54,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1368
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 69,
            "enginePowerKW": 51,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1271
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 54,
            "enginePowerKW": 40,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1597
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 49,
            "enginePowerKW": 36,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1087
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 97,
            "enginePowerKW": 71,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1567
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 71,
            "enginePowerKW": 52,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1368
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 95,
            "enginePowerKW": 70,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1567
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 60,
            "enginePowerKW": 44,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1242
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 82,
            "enginePowerKW": 60,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1242
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 97,
            "enginePowerKW": 71,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1388
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 120,
            "enginePowerKW": 88,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1596
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 69,
            "enginePowerKW": 51,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1299
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 68,
            "enginePowerKW": 50,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1399
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 60,
            "enginePowerKW": 44,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1299
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 90,
            "enginePowerKW": 66,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1560
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 140,
            "enginePowerKW": 103,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 998
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 88,
            "enginePowerKW": 65,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1597
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 45,
            "enginePowerKW": 33,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 935
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 71,
            "enginePowerKW": 52,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1391
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 60,
            "enginePowerKW": 44,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1753
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 103,
            "enginePowerKW": 76,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1598
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 103,
            "enginePowerKW": 76,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1598
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 50,
            "enginePowerKW": 37,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1087
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 60,
            "enginePowerKW": 44,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1753
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 73,
            "enginePowerKW": 54,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1391
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 50,
            "enginePowerKW": 37,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1119
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 50,
            "enginePowerKW": 37,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1097
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 105,
            "enginePowerKW": 77,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1796
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 131,
            "enginePowerKW": 96,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1796
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 54,
            "enginePowerKW": 40,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1097
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 71,
            "enginePowerKW": 52,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1391
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 60,
            "enginePowerKW": 44,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1299
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 80,
            "enginePowerKW": 59,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1388
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 69,
            "enginePowerKW": 51,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1299
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 68,
            "enginePowerKW": 50,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1399
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 60,
            "enginePowerKW": 44,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1299
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 75,
            "enginePowerKW": 55,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1368
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 101,
            "enginePowerKW": 74,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1596
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 80,
            "enginePowerKW": 59,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1388
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 75,
            "enginePowerKW": 55,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1560
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 95,
            "enginePowerKW": 70,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1499
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 97,
            "enginePowerKW": 71,
            "fuelType": "Gas",
            "bodyType": "Limousine",
            "engineCapacity": 1388
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 68,
            "enginePowerKW": 50,
            "fuelType": "Diesel",
            "bodyType": "Limousine",
            "engineCapacity": 1399
        },
        {
            "make": "FORD",
            "model": "Fiesta",
            "enginePowerPS": 101,
            "enginePowerKW": 74,
            "fuelType": "Benzin",
            "bodyType": "Limousine",
            "engineCapacity": 1596
        }
    ]
}

export default defaultState;