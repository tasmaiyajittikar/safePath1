// const flightData = [];
// const checkInData = {
//     'Turkish Airlines Check-In': [32.89613104905737, -97.04336386895568],
//     'VivaAerobus Check-In': [32.89619073059622, -97.0434262303164],
//     'Volaris Check-In': [32.896271244306604, -97.04351340211089],
//     'Korean Air Check-In': [32.896317976007026, -97.04356101132174],
//     'Qatar Airways Check-In': [32.896357388267496, -97.04362739599418],
//     'Japan Airway Check-In': [32.89640975024068, -97.04366897023465],
//     'American Airlines Check-In': [32.89646323824586, -97.04372127331136],
//     'Emirates Check-In': [32.89667537897746, -97.04397207114613],
//     'British Airways Check-In': [32.89672506400242, -97.04403887984196],
//     'Qantas Check-In': [32.896761927067445, -97.04410187089805],
//     'Air France Check-In': [32.896811612046506, -97.0441543634428],
//     'Lufthansa Check-In': [32.89686530384453, -97.04420971921938],
//     'Aeromexico Check-In': [32.89691579013238, -97.04422785300824],
//     'Sun Country Check-In': [32.89696707776042, -97.04422021772871],
//     'Avianca Check-In': [32.897019166727254, -97.04420590157962]
// };

// const gateData = {
//     'D6': [32.895805406752274, -97.04226135876755],
//     'D7': [32.895810028169244, -97.04239895670314],
//     'D8': [32.89581927100244, -97.04298237195006],
//     'D10': [32.89580540675266, -97.04317776100005],
//     'D11': [32.89580540675266, -97.0437694321231],
//     'D12': [32.89580078533546, -97.04394555748067],
//     'D14': [32.89583082454296, -97.044553740356],
//     'D16': [32.89594635986158, -97.04467757849802],
//     'D17': [32.8960156809804, -97.04476288921809],
//     'D18': [32.89637846061746, -97.04478490488779],
//     'D21': [32.89706704465068, -97.04485370385413],
//     'D22': [32.897291179903256, -97.04485095189543],
//     'D23': [32.898076849594034, -97.0448511489283],
//     'D24': [32.89828084313302, -97.0448445825928]
// };

// const securityLocation = [32.8964521057037, -97.04408651397681];

// // Helper function to get a random flight number
// const generateFlightNumber = (airline) => {
//     const randomNum = Math.floor(Math.random() * 900) + 100;  // Random flight number between 100 and 999
//     return `${airline.slice(0, 2).toUpperCase()}${randomNum}`;
// };

// // Helper function to get a random status (On Time or Delayed)
// const getRandomStatus = () => {
//     return Math.random() > 0.5 ? 'On Time' : 'Delayed';
// };

// // Generate flight data only for unique combinations
// const generateFlightData = () => {
//     const generatedFlightNumbers = new Set(); // Track flight numbers to avoid duplicates

//     Object.keys(checkInData).forEach((airline) => {
//         Object.keys(gateData).forEach((gate) => {
//             const flightNumber = generateFlightNumber(airline);
//             if (!generatedFlightNumbers.has(flightNumber)) {
//                 const flight = {
//                     flightNumber: flightNumber,
//                     airline: airline.split(' ')[0],  // Extract airline name
//                     terminal: 'A', // Hardcoded to 'A', you can adjust this if needed
//                     checkInLocation: checkInData[airline],
//                     gateLocation: gateData[gate],
//                     securityLocation: securityLocation,
//                     status: getRandomStatus(),
//                     estimatedDeparture: `2025-04-0${(Math.floor(Math.random() * 3) + 1)}T1${Math.floor(Math.random() * 10)}:${Math.floor(Math.random() * 60)}:00`, // Random date and time
//                 };
//                 flightData.push(flight);
//                 generatedFlightNumbers.add(flightNumber); // Ensure the flight number is unique
//             }
//         });
//     });
// };

// // Call function to generate data
// generateFlightData();

// console.log(flightData);



// const flightData = [];
// const checkInData = {
//     'Turkish Airlines Check-In': [32.89613104905737, -97.04336386895568],
//     'VivaAerobus Check-In': [32.89619073059622, -97.0434262303164],
//     'Volaris Check-In': [32.896271244306604, -97.04351340211089],
//     'Korean Air Check-In': [32.896317976007026, -97.04356101132174],
//     'Qatar Airways Check-In': [32.896357388267496, -97.04362739599418],
//     'Japan Airway Check-In': [32.89640975024068, -97.04366897023465],
//     'American Airlines Check-In': [32.89646323824586, -97.04372127331136],
//     'Emirates Check-In': [32.89667537897746, -97.04397207114613],
//     'British Airways Check-In': [32.89672506400242, -97.04403887984196],
//     'Qantas Check-In': [32.896761927067445, -97.04410187089805],
//     'Air France Check-In': [32.896811612046506, -97.0441543634428],
//     'Lufthansa Check-In': [32.89686530384453, -97.04420971921938],
//     'Aeromexico Check-In': [32.89691579013238, -97.04422785300824],
//     'Sun Country Check-In': [32.89696707776042, -97.04422021772871],
//     'Avianca Check-In': [32.897019166727254, -97.04420590157962]
// };

// const gateData = {
//     'D6': [32.895805406752274, -97.04226135876755],
//     'D7': [32.895810028169244, -97.04239895670314],
//     'D8': [32.89581927100244, -97.04298237195006],
//     'D10': [32.89580540675266, -97.04317776100005],
//     'D11': [32.89580540675266, -97.0437694321231],
//     'D12': [32.89580078533546, -97.04394555748067],
//     'D14': [32.89583082454296, -97.044553740356],
//     'D16': [32.89594635986158, -97.04467757849802],
//     'D17': [32.8960156809804, -97.04476288921809],
//     'D18': [32.89637846061746, -97.04478490488779],
//     'D21': [32.89706704465068, -97.04485370385413],
//     'D22': [32.897291179903256, -97.04485095189543],
//     'D23': [32.898076849594034, -97.0448511489283],
//     'D24': [32.89828084313302, -97.0448445825928]
// };

// const securityLocation = [32.8964521057037, -97.04408651397681];

// // Helper function to get a random flight number
// const generateFlightNumber = (airline) => {
//     const randomNum = Math.floor(Math.random() * 900) + 100;  // Random flight number between 100 and 999
//     return `${airline.slice(0, 2).toUpperCase()}${randomNum}`;
// };

// // Helper function to get a random status (On Time or Delayed)
// const getRandomStatus = () => {
//     return Math.random() > 0.5 ? 'On Time' : 'Delayed';
// };

// // Helper function to get a random check-in counter name
// const generateCheckInCounterName = (airline) => {
//     return `${airline.split(' ')[0]} Airlines Counter`;
// };

// // Helper function to get a random baggage drop name
// const generateBaggageDropName = (airline) => {
//     return `${airline.split(' ')[0]} Baggage Drop`;
// };

// // Generate flight data only for unique combinations
// const generateFlightData = () => {
//     const generatedFlightNumbers = new Set(); // Track flight numbers to avoid duplicates

//     Object.keys(checkInData).forEach((airline) => {
//         Object.keys(gateData).forEach((gate) => {
//             const flightNumber = generateFlightNumber(airline);
//             if (!generatedFlightNumbers.has(flightNumber)) {
//                 const flight = {
//                     flightNumber: flightNumber,
//                     airline: airline.split(' ')[0],  // Extract airline name
//                     terminal: 'A', // Hardcoded to 'A', you can adjust this if needed
//                     terminalCoordinates: checkInData[airline], // Terminal entry point coordinates
//                     checkInLocation: checkInData[airline],
//                     checkInCounterName: generateCheckInCounterName(airline),
//                     baggageDropName: generateBaggageDropName(airline),
//                     securityLocation: securityLocation,
//                     gateLocation: gateData[gate],
//                     gateNumber: gate,
//                     status: getRandomStatus(),
//                     estimatedDeparture: `2025-04-0${(Math.floor(Math.random() * 3) + 1)}T1${Math.floor(Math.random() * 10)}:${Math.floor(Math.random() * 60)}:00`, // Random date and time
//                 };
//                 flightData.push(flight);
//                 generatedFlightNumbers.add(flightNumber); // Ensure the flight number is unique
//             }
//         });
//     });
// };

// // Call function to generate data
// generateFlightData();

// console.log(flightData);


const sampleData = [
    {
        "flightNumber": "TU500",
        "airline": "Turkish",
        "terminal": "A",
        "terminalCoordinates": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInLocation": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInCounterName": "Turkish Airlines Counter",
        "baggageDropName": "Turkish Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895805406752274,
            -97.04226135876755
        ],
        "gateNumber": "D6",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T11:7:00"
    },
    {
        "flightNumber": "TU765",
        "airline": "Turkish",
        "terminal": "A",
        "terminalCoordinates": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInLocation": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInCounterName": "Turkish Airlines Counter",
        "baggageDropName": "Turkish Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895810028169244,
            -97.04239895670314
        ],
        "gateNumber": "D7",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T12:34:00"
    },
    {
        "flightNumber": "TU142",
        "airline": "Turkish",
        "terminal": "A",
        "terminalCoordinates": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInLocation": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInCounterName": "Turkish Airlines Counter",
        "baggageDropName": "Turkish Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89581927100244,
            -97.04298237195006
        ],
        "gateNumber": "D8",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T11:8:00"
    },
    {
        "flightNumber": "TU722",
        "airline": "Turkish",
        "terminal": "A",
        "terminalCoordinates": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInLocation": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInCounterName": "Turkish Airlines Counter",
        "baggageDropName": "Turkish Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.04317776100005
        ],
        "gateNumber": "D10",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T13:17:00"
    },
    {
        "flightNumber": "TU936",
        "airline": "Turkish",
        "terminal": "A",
        "terminalCoordinates": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInLocation": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInCounterName": "Turkish Airlines Counter",
        "baggageDropName": "Turkish Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.0437694321231
        ],
        "gateNumber": "D11",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T17:49:00"
    },
    {
        "flightNumber": "TU355",
        "airline": "Turkish",
        "terminal": "A",
        "terminalCoordinates": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInLocation": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInCounterName": "Turkish Airlines Counter",
        "baggageDropName": "Turkish Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580078533546,
            -97.04394555748067
        ],
        "gateNumber": "D12",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T12:10:00"
    },
    {
        "flightNumber": "TU137",
        "airline": "Turkish",
        "terminal": "A",
        "terminalCoordinates": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInLocation": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInCounterName": "Turkish Airlines Counter",
        "baggageDropName": "Turkish Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89583082454296,
            -97.044553740356
        ],
        "gateNumber": "D14",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T10:9:00"
    },
    {
        "flightNumber": "TU665",
        "airline": "Turkish",
        "terminal": "A",
        "terminalCoordinates": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInLocation": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInCounterName": "Turkish Airlines Counter",
        "baggageDropName": "Turkish Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89594635986158,
            -97.04467757849802
        ],
        "gateNumber": "D16",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T14:34:00"
    },
    {
        "flightNumber": "TU239",
        "airline": "Turkish",
        "terminal": "A",
        "terminalCoordinates": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInLocation": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInCounterName": "Turkish Airlines Counter",
        "baggageDropName": "Turkish Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.8960156809804,
            -97.04476288921809
        ],
        "gateNumber": "D17",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T15:31:00"
    },
    {
        "flightNumber": "TU703",
        "airline": "Turkish",
        "terminal": "A",
        "terminalCoordinates": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInLocation": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInCounterName": "Turkish Airlines Counter",
        "baggageDropName": "Turkish Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89637846061746,
            -97.04478490488779
        ],
        "gateNumber": "D18",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T12:8:00"
    },
    {
        "flightNumber": "TU543",
        "airline": "Turkish",
        "terminal": "A",
        "terminalCoordinates": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInLocation": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInCounterName": "Turkish Airlines Counter",
        "baggageDropName": "Turkish Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89706704465068,
            -97.04485370385413
        ],
        "gateNumber": "D21",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T15:55:00"
    },
    {
        "flightNumber": "TU180",
        "airline": "Turkish",
        "terminal": "A",
        "terminalCoordinates": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInLocation": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInCounterName": "Turkish Airlines Counter",
        "baggageDropName": "Turkish Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.897291179903256,
            -97.04485095189543
        ],
        "gateNumber": "D22",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T15:32:00"
    },
    {
        "flightNumber": "TU576",
        "airline": "Turkish",
        "terminal": "A",
        "terminalCoordinates": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInLocation": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInCounterName": "Turkish Airlines Counter",
        "baggageDropName": "Turkish Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.898076849594034,
            -97.0448511489283
        ],
        "gateNumber": "D23",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T19:5:00"
    },
    {
        "flightNumber": "TU926",
        "airline": "Turkish",
        "terminal": "A",
        "terminalCoordinates": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInLocation": [
            32.89613104905737,
            -97.04336386895568
        ],
        "checkInCounterName": "Turkish Airlines Counter",
        "baggageDropName": "Turkish Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89828084313302,
            -97.0448445825928
        ],
        "gateNumber": "D24",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T12:38:00"
    },
    {
        "flightNumber": "VI225",
        "airline": "VivaAerobus",
        "terminal": "A",
        "terminalCoordinates": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInLocation": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInCounterName": "VivaAerobus Airlines Counter",
        "baggageDropName": "VivaAerobus Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895805406752274,
            -97.04226135876755
        ],
        "gateNumber": "D6",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T12:22:00"
    },
    {
        "flightNumber": "VI858",
        "airline": "VivaAerobus",
        "terminal": "A",
        "terminalCoordinates": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInLocation": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInCounterName": "VivaAerobus Airlines Counter",
        "baggageDropName": "VivaAerobus Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895810028169244,
            -97.04239895670314
        ],
        "gateNumber": "D7",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T11:44:00"
    },
    {
        "flightNumber": "VI480",
        "airline": "VivaAerobus",
        "terminal": "A",
        "terminalCoordinates": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInLocation": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInCounterName": "VivaAerobus Airlines Counter",
        "baggageDropName": "VivaAerobus Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89581927100244,
            -97.04298237195006
        ],
        "gateNumber": "D8",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T10:54:00"
    },
    {
        "flightNumber": "VI789",
        "airline": "VivaAerobus",
        "terminal": "A",
        "terminalCoordinates": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInLocation": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInCounterName": "VivaAerobus Airlines Counter",
        "baggageDropName": "VivaAerobus Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.04317776100005
        ],
        "gateNumber": "D10",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T16:37:00"
    },
    {
        "flightNumber": "VI773",
        "airline": "VivaAerobus",
        "terminal": "A",
        "terminalCoordinates": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInLocation": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInCounterName": "VivaAerobus Airlines Counter",
        "baggageDropName": "VivaAerobus Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.0437694321231
        ],
        "gateNumber": "D11",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T19:10:00"
    },
    {
        "flightNumber": "VI521",
        "airline": "VivaAerobus",
        "terminal": "A",
        "terminalCoordinates": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInLocation": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInCounterName": "VivaAerobus Airlines Counter",
        "baggageDropName": "VivaAerobus Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580078533546,
            -97.04394555748067
        ],
        "gateNumber": "D12",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T16:33:00"
    },
    {
        "flightNumber": "VI874",
        "airline": "VivaAerobus",
        "terminal": "A",
        "terminalCoordinates": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInLocation": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInCounterName": "VivaAerobus Airlines Counter",
        "baggageDropName": "VivaAerobus Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89583082454296,
            -97.044553740356
        ],
        "gateNumber": "D14",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T12:3:00"
    },
    {
        "flightNumber": "VI639",
        "airline": "VivaAerobus",
        "terminal": "A",
        "terminalCoordinates": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInLocation": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInCounterName": "VivaAerobus Airlines Counter",
        "baggageDropName": "VivaAerobus Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89594635986158,
            -97.04467757849802
        ],
        "gateNumber": "D16",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T15:23:00"
    },
    {
        "flightNumber": "VI455",
        "airline": "VivaAerobus",
        "terminal": "A",
        "terminalCoordinates": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInLocation": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInCounterName": "VivaAerobus Airlines Counter",
        "baggageDropName": "VivaAerobus Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.8960156809804,
            -97.04476288921809
        ],
        "gateNumber": "D17",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T14:2:00"
    },
    {
        "flightNumber": "VI332",
        "airline": "VivaAerobus",
        "terminal": "A",
        "terminalCoordinates": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInLocation": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInCounterName": "VivaAerobus Airlines Counter",
        "baggageDropName": "VivaAerobus Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89637846061746,
            -97.04478490488779
        ],
        "gateNumber": "D18",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T16:55:00"
    },
    {
        "flightNumber": "VI337",
        "airline": "VivaAerobus",
        "terminal": "A",
        "terminalCoordinates": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInLocation": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInCounterName": "VivaAerobus Airlines Counter",
        "baggageDropName": "VivaAerobus Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89706704465068,
            -97.04485370385413
        ],
        "gateNumber": "D21",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T16:8:00"
    },
    {
        "flightNumber": "VI790",
        "airline": "VivaAerobus",
        "terminal": "A",
        "terminalCoordinates": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInLocation": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInCounterName": "VivaAerobus Airlines Counter",
        "baggageDropName": "VivaAerobus Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.897291179903256,
            -97.04485095189543
        ],
        "gateNumber": "D22",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T19:41:00"
    },
    {
        "flightNumber": "VI961",
        "airline": "VivaAerobus",
        "terminal": "A",
        "terminalCoordinates": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInLocation": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInCounterName": "VivaAerobus Airlines Counter",
        "baggageDropName": "VivaAerobus Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.898076849594034,
            -97.0448511489283
        ],
        "gateNumber": "D23",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T12:29:00"
    },
    {
        "flightNumber": "VI712",
        "airline": "VivaAerobus",
        "terminal": "A",
        "terminalCoordinates": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInLocation": [
            32.89619073059622,
            -97.0434262303164
        ],
        "checkInCounterName": "VivaAerobus Airlines Counter",
        "baggageDropName": "VivaAerobus Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89828084313302,
            -97.0448445825928
        ],
        "gateNumber": "D24",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T13:35:00"
    },
    {
        "flightNumber": "VO990",
        "airline": "Volaris",
        "terminal": "A",
        "terminalCoordinates": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInLocation": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInCounterName": "Volaris Airlines Counter",
        "baggageDropName": "Volaris Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895805406752274,
            -97.04226135876755
        ],
        "gateNumber": "D6",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T14:17:00"
    },
    {
        "flightNumber": "VO253",
        "airline": "Volaris",
        "terminal": "A",
        "terminalCoordinates": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInLocation": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInCounterName": "Volaris Airlines Counter",
        "baggageDropName": "Volaris Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895810028169244,
            -97.04239895670314
        ],
        "gateNumber": "D7",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T11:38:00"
    },
    {
        "flightNumber": "VO296",
        "airline": "Volaris",
        "terminal": "A",
        "terminalCoordinates": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInLocation": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInCounterName": "Volaris Airlines Counter",
        "baggageDropName": "Volaris Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89581927100244,
            -97.04298237195006
        ],
        "gateNumber": "D8",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T10:36:00"
    },
    {
        "flightNumber": "VO542",
        "airline": "Volaris",
        "terminal": "A",
        "terminalCoordinates": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInLocation": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInCounterName": "Volaris Airlines Counter",
        "baggageDropName": "Volaris Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.04317776100005
        ],
        "gateNumber": "D10",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T18:3:00"
    },
    {
        "flightNumber": "VO692",
        "airline": "Volaris",
        "terminal": "A",
        "terminalCoordinates": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInLocation": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInCounterName": "Volaris Airlines Counter",
        "baggageDropName": "Volaris Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.0437694321231
        ],
        "gateNumber": "D11",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T17:24:00"
    },
    {
        "flightNumber": "VO886",
        "airline": "Volaris",
        "terminal": "A",
        "terminalCoordinates": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInLocation": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInCounterName": "Volaris Airlines Counter",
        "baggageDropName": "Volaris Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580078533546,
            -97.04394555748067
        ],
        "gateNumber": "D12",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T19:1:00"
    },
    {
        "flightNumber": "VO459",
        "airline": "Volaris",
        "terminal": "A",
        "terminalCoordinates": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInLocation": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInCounterName": "Volaris Airlines Counter",
        "baggageDropName": "Volaris Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89583082454296,
            -97.044553740356
        ],
        "gateNumber": "D14",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T16:43:00"
    },
    {
        "flightNumber": "VO644",
        "airline": "Volaris",
        "terminal": "A",
        "terminalCoordinates": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInLocation": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInCounterName": "Volaris Airlines Counter",
        "baggageDropName": "Volaris Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89594635986158,
            -97.04467757849802
        ],
        "gateNumber": "D16",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T13:31:00"
    },
    {
        "flightNumber": "VO755",
        "airline": "Volaris",
        "terminal": "A",
        "terminalCoordinates": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInLocation": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInCounterName": "Volaris Airlines Counter",
        "baggageDropName": "Volaris Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.8960156809804,
            -97.04476288921809
        ],
        "gateNumber": "D17",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T15:53:00"
    },
    {
        "flightNumber": "VO935",
        "airline": "Volaris",
        "terminal": "A",
        "terminalCoordinates": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInLocation": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInCounterName": "Volaris Airlines Counter",
        "baggageDropName": "Volaris Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89637846061746,
            -97.04478490488779
        ],
        "gateNumber": "D18",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T12:10:00"
    },
    {
        "flightNumber": "VO155",
        "airline": "Volaris",
        "terminal": "A",
        "terminalCoordinates": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInLocation": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInCounterName": "Volaris Airlines Counter",
        "baggageDropName": "Volaris Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89706704465068,
            -97.04485370385413
        ],
        "gateNumber": "D21",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T12:2:00"
    },
    {
        "flightNumber": "VO858",
        "airline": "Volaris",
        "terminal": "A",
        "terminalCoordinates": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInLocation": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInCounterName": "Volaris Airlines Counter",
        "baggageDropName": "Volaris Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.897291179903256,
            -97.04485095189543
        ],
        "gateNumber": "D22",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T19:22:00"
    },
    {
        "flightNumber": "VO698",
        "airline": "Volaris",
        "terminal": "A",
        "terminalCoordinates": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInLocation": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInCounterName": "Volaris Airlines Counter",
        "baggageDropName": "Volaris Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.898076849594034,
            -97.0448511489283
        ],
        "gateNumber": "D23",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T10:36:00"
    },
    {
        "flightNumber": "VO580",
        "airline": "Volaris",
        "terminal": "A",
        "terminalCoordinates": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInLocation": [
            32.896271244306604,
            -97.04351340211089
        ],
        "checkInCounterName": "Volaris Airlines Counter",
        "baggageDropName": "Volaris Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89828084313302,
            -97.0448445825928
        ],
        "gateNumber": "D24",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T17:41:00"
    },
    {
        "flightNumber": "KO249",
        "airline": "Korean",
        "terminal": "A",
        "terminalCoordinates": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInLocation": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInCounterName": "Korean Airlines Counter",
        "baggageDropName": "Korean Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895805406752274,
            -97.04226135876755
        ],
        "gateNumber": "D6",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T17:53:00"
    },
    {
        "flightNumber": "KO428",
        "airline": "Korean",
        "terminal": "A",
        "terminalCoordinates": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInLocation": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInCounterName": "Korean Airlines Counter",
        "baggageDropName": "Korean Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895810028169244,
            -97.04239895670314
        ],
        "gateNumber": "D7",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T10:31:00"
    },
    {
        "flightNumber": "KO636",
        "airline": "Korean",
        "terminal": "A",
        "terminalCoordinates": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInLocation": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInCounterName": "Korean Airlines Counter",
        "baggageDropName": "Korean Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89581927100244,
            -97.04298237195006
        ],
        "gateNumber": "D8",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T13:45:00"
    },
    {
        "flightNumber": "KO243",
        "airline": "Korean",
        "terminal": "A",
        "terminalCoordinates": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInLocation": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInCounterName": "Korean Airlines Counter",
        "baggageDropName": "Korean Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.04317776100005
        ],
        "gateNumber": "D10",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T19:1:00"
    },
    {
        "flightNumber": "KO470",
        "airline": "Korean",
        "terminal": "A",
        "terminalCoordinates": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInLocation": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInCounterName": "Korean Airlines Counter",
        "baggageDropName": "Korean Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.0437694321231
        ],
        "gateNumber": "D11",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T12:8:00"
    },
    {
        "flightNumber": "KO740",
        "airline": "Korean",
        "terminal": "A",
        "terminalCoordinates": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInLocation": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInCounterName": "Korean Airlines Counter",
        "baggageDropName": "Korean Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580078533546,
            -97.04394555748067
        ],
        "gateNumber": "D12",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T13:49:00"
    },
    {
        "flightNumber": "KO731",
        "airline": "Korean",
        "terminal": "A",
        "terminalCoordinates": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInLocation": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInCounterName": "Korean Airlines Counter",
        "baggageDropName": "Korean Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89583082454296,
            -97.044553740356
        ],
        "gateNumber": "D14",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T14:32:00"
    },
    {
        "flightNumber": "KO946",
        "airline": "Korean",
        "terminal": "A",
        "terminalCoordinates": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInLocation": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInCounterName": "Korean Airlines Counter",
        "baggageDropName": "Korean Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89594635986158,
            -97.04467757849802
        ],
        "gateNumber": "D16",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T13:48:00"
    },
    {
        "flightNumber": "KO610",
        "airline": "Korean",
        "terminal": "A",
        "terminalCoordinates": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInLocation": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInCounterName": "Korean Airlines Counter",
        "baggageDropName": "Korean Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.8960156809804,
            -97.04476288921809
        ],
        "gateNumber": "D17",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T17:5:00"
    },
    {
        "flightNumber": "KO141",
        "airline": "Korean",
        "terminal": "A",
        "terminalCoordinates": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInLocation": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInCounterName": "Korean Airlines Counter",
        "baggageDropName": "Korean Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89637846061746,
            -97.04478490488779
        ],
        "gateNumber": "D18",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T10:4:00"
    },
    {
        "flightNumber": "KO859",
        "airline": "Korean",
        "terminal": "A",
        "terminalCoordinates": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInLocation": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInCounterName": "Korean Airlines Counter",
        "baggageDropName": "Korean Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89706704465068,
            -97.04485370385413
        ],
        "gateNumber": "D21",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T18:24:00"
    },
    {
        "flightNumber": "KO552",
        "airline": "Korean",
        "terminal": "A",
        "terminalCoordinates": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInLocation": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInCounterName": "Korean Airlines Counter",
        "baggageDropName": "Korean Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.897291179903256,
            -97.04485095189543
        ],
        "gateNumber": "D22",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T15:38:00"
    },
    {
        "flightNumber": "KO718",
        "airline": "Korean",
        "terminal": "A",
        "terminalCoordinates": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInLocation": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInCounterName": "Korean Airlines Counter",
        "baggageDropName": "Korean Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.898076849594034,
            -97.0448511489283
        ],
        "gateNumber": "D23",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T12:58:00"
    },
    {
        "flightNumber": "KO926",
        "airline": "Korean",
        "terminal": "A",
        "terminalCoordinates": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInLocation": [
            32.896317976007026,
            -97.04356101132174
        ],
        "checkInCounterName": "Korean Airlines Counter",
        "baggageDropName": "Korean Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89828084313302,
            -97.0448445825928
        ],
        "gateNumber": "D24",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T17:30:00"
    },
    {
        "flightNumber": "QA660",
        "airline": "Qatar",
        "terminal": "A",
        "terminalCoordinates": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInLocation": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInCounterName": "Qatar Airlines Counter",
        "baggageDropName": "Qatar Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895805406752274,
            -97.04226135876755
        ],
        "gateNumber": "D6",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T19:53:00"
    },
    {
        "flightNumber": "QA264",
        "airline": "Qatar",
        "terminal": "A",
        "terminalCoordinates": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInLocation": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInCounterName": "Qatar Airlines Counter",
        "baggageDropName": "Qatar Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895810028169244,
            -97.04239895670314
        ],
        "gateNumber": "D7",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T16:21:00"
    },
    {
        "flightNumber": "QA942",
        "airline": "Qatar",
        "terminal": "A",
        "terminalCoordinates": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInLocation": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInCounterName": "Qatar Airlines Counter",
        "baggageDropName": "Qatar Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89581927100244,
            -97.04298237195006
        ],
        "gateNumber": "D8",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T18:59:00"
    },
    {
        "flightNumber": "QA819",
        "airline": "Qatar",
        "terminal": "A",
        "terminalCoordinates": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInLocation": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInCounterName": "Qatar Airlines Counter",
        "baggageDropName": "Qatar Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.04317776100005
        ],
        "gateNumber": "D10",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T17:17:00"
    },
    {
        "flightNumber": "QA484",
        "airline": "Qatar",
        "terminal": "A",
        "terminalCoordinates": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInLocation": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInCounterName": "Qatar Airlines Counter",
        "baggageDropName": "Qatar Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.0437694321231
        ],
        "gateNumber": "D11",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T16:15:00"
    },
    {
        "flightNumber": "QA839",
        "airline": "Qatar",
        "terminal": "A",
        "terminalCoordinates": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInLocation": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInCounterName": "Qatar Airlines Counter",
        "baggageDropName": "Qatar Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580078533546,
            -97.04394555748067
        ],
        "gateNumber": "D12",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T13:49:00"
    },
    {
        "flightNumber": "QA847",
        "airline": "Qatar",
        "terminal": "A",
        "terminalCoordinates": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInLocation": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInCounterName": "Qatar Airlines Counter",
        "baggageDropName": "Qatar Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89583082454296,
            -97.044553740356
        ],
        "gateNumber": "D14",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T14:37:00"
    },
    {
        "flightNumber": "QA990",
        "airline": "Qatar",
        "terminal": "A",
        "terminalCoordinates": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInLocation": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInCounterName": "Qatar Airlines Counter",
        "baggageDropName": "Qatar Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89594635986158,
            -97.04467757849802
        ],
        "gateNumber": "D16",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T11:22:00"
    },
    {
        "flightNumber": "QA468",
        "airline": "Qatar",
        "terminal": "A",
        "terminalCoordinates": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInLocation": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInCounterName": "Qatar Airlines Counter",
        "baggageDropName": "Qatar Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.8960156809804,
            -97.04476288921809
        ],
        "gateNumber": "D17",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T10:9:00"
    },
    {
        "flightNumber": "QA705",
        "airline": "Qatar",
        "terminal": "A",
        "terminalCoordinates": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInLocation": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInCounterName": "Qatar Airlines Counter",
        "baggageDropName": "Qatar Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89637846061746,
            -97.04478490488779
        ],
        "gateNumber": "D18",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T18:34:00"
    },
    {
        "flightNumber": "QA570",
        "airline": "Qatar",
        "terminal": "A",
        "terminalCoordinates": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInLocation": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInCounterName": "Qatar Airlines Counter",
        "baggageDropName": "Qatar Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89706704465068,
            -97.04485370385413
        ],
        "gateNumber": "D21",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T18:17:00"
    },
    {
        "flightNumber": "QA860",
        "airline": "Qatar",
        "terminal": "A",
        "terminalCoordinates": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInLocation": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInCounterName": "Qatar Airlines Counter",
        "baggageDropName": "Qatar Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.897291179903256,
            -97.04485095189543
        ],
        "gateNumber": "D22",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T12:34:00"
    },
    {
        "flightNumber": "QA153",
        "airline": "Qatar",
        "terminal": "A",
        "terminalCoordinates": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInLocation": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInCounterName": "Qatar Airlines Counter",
        "baggageDropName": "Qatar Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.898076849594034,
            -97.0448511489283
        ],
        "gateNumber": "D23",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T18:7:00"
    },
    {
        "flightNumber": "QA527",
        "airline": "Qatar",
        "terminal": "A",
        "terminalCoordinates": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInLocation": [
            32.896357388267496,
            -97.04362739599418
        ],
        "checkInCounterName": "Qatar Airlines Counter",
        "baggageDropName": "Qatar Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89828084313302,
            -97.0448445825928
        ],
        "gateNumber": "D24",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T12:7:00"
    },
    {
        "flightNumber": "JA870",
        "airline": "Japan",
        "terminal": "A",
        "terminalCoordinates": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInLocation": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInCounterName": "Japan Airlines Counter",
        "baggageDropName": "Japan Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895805406752274,
            -97.04226135876755
        ],
        "gateNumber": "D6",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T13:23:00"
    },
    {
        "flightNumber": "JA616",
        "airline": "Japan",
        "terminal": "A",
        "terminalCoordinates": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInLocation": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInCounterName": "Japan Airlines Counter",
        "baggageDropName": "Japan Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895810028169244,
            -97.04239895670314
        ],
        "gateNumber": "D7",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T10:34:00"
    },
    {
        "flightNumber": "JA588",
        "airline": "Japan",
        "terminal": "A",
        "terminalCoordinates": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInLocation": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInCounterName": "Japan Airlines Counter",
        "baggageDropName": "Japan Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89581927100244,
            -97.04298237195006
        ],
        "gateNumber": "D8",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T10:49:00"
    },
    {
        "flightNumber": "JA178",
        "airline": "Japan",
        "terminal": "A",
        "terminalCoordinates": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInLocation": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInCounterName": "Japan Airlines Counter",
        "baggageDropName": "Japan Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.04317776100005
        ],
        "gateNumber": "D10",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T16:17:00"
    },
    {
        "flightNumber": "JA559",
        "airline": "Japan",
        "terminal": "A",
        "terminalCoordinates": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInLocation": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInCounterName": "Japan Airlines Counter",
        "baggageDropName": "Japan Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.0437694321231
        ],
        "gateNumber": "D11",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T19:8:00"
    },
    {
        "flightNumber": "JA336",
        "airline": "Japan",
        "terminal": "A",
        "terminalCoordinates": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInLocation": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInCounterName": "Japan Airlines Counter",
        "baggageDropName": "Japan Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580078533546,
            -97.04394555748067
        ],
        "gateNumber": "D12",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T16:48:00"
    },
    {
        "flightNumber": "JA462",
        "airline": "Japan",
        "terminal": "A",
        "terminalCoordinates": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInLocation": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInCounterName": "Japan Airlines Counter",
        "baggageDropName": "Japan Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89583082454296,
            -97.044553740356
        ],
        "gateNumber": "D14",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T10:27:00"
    },
    {
        "flightNumber": "JA672",
        "airline": "Japan",
        "terminal": "A",
        "terminalCoordinates": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInLocation": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInCounterName": "Japan Airlines Counter",
        "baggageDropName": "Japan Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89594635986158,
            -97.04467757849802
        ],
        "gateNumber": "D16",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T16:18:00"
    },
    {
        "flightNumber": "JA727",
        "airline": "Japan",
        "terminal": "A",
        "terminalCoordinates": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInLocation": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInCounterName": "Japan Airlines Counter",
        "baggageDropName": "Japan Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.8960156809804,
            -97.04476288921809
        ],
        "gateNumber": "D17",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T10:52:00"
    },
    {
        "flightNumber": "JA601",
        "airline": "Japan",
        "terminal": "A",
        "terminalCoordinates": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInLocation": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInCounterName": "Japan Airlines Counter",
        "baggageDropName": "Japan Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89637846061746,
            -97.04478490488779
        ],
        "gateNumber": "D18",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T12:19:00"
    },
    {
        "flightNumber": "JA913",
        "airline": "Japan",
        "terminal": "A",
        "terminalCoordinates": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInLocation": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInCounterName": "Japan Airlines Counter",
        "baggageDropName": "Japan Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89706704465068,
            -97.04485370385413
        ],
        "gateNumber": "D21",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T11:22:00"
    },
    {
        "flightNumber": "JA662",
        "airline": "Japan",
        "terminal": "A",
        "terminalCoordinates": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInLocation": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInCounterName": "Japan Airlines Counter",
        "baggageDropName": "Japan Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.897291179903256,
            -97.04485095189543
        ],
        "gateNumber": "D22",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T15:45:00"
    },
    {
        "flightNumber": "JA594",
        "airline": "Japan",
        "terminal": "A",
        "terminalCoordinates": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInLocation": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInCounterName": "Japan Airlines Counter",
        "baggageDropName": "Japan Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.898076849594034,
            -97.0448511489283
        ],
        "gateNumber": "D23",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T13:49:00"
    },
    {
        "flightNumber": "JA373",
        "airline": "Japan",
        "terminal": "A",
        "terminalCoordinates": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInLocation": [
            32.89640975024068,
            -97.04366897023465
        ],
        "checkInCounterName": "Japan Airlines Counter",
        "baggageDropName": "Japan Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89828084313302,
            -97.0448445825928
        ],
        "gateNumber": "D24",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T12:52:00"
    },
    {
        "flightNumber": "AM382",
        "airline": "American",
        "terminal": "A",
        "terminalCoordinates": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInLocation": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInCounterName": "American Airlines Counter",
        "baggageDropName": "American Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895805406752274,
            -97.04226135876755
        ],
        "gateNumber": "D6",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T16:8:00"
    },
    {
        "flightNumber": "AM327",
        "airline": "American",
        "terminal": "A",
        "terminalCoordinates": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInLocation": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInCounterName": "American Airlines Counter",
        "baggageDropName": "American Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895810028169244,
            -97.04239895670314
        ],
        "gateNumber": "D7",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T13:33:00"
    },
    {
        "flightNumber": "AM947",
        "airline": "American",
        "terminal": "A",
        "terminalCoordinates": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInLocation": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInCounterName": "American Airlines Counter",
        "baggageDropName": "American Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89581927100244,
            -97.04298237195006
        ],
        "gateNumber": "D8",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T10:35:00"
    },
    {
        "flightNumber": "AM663",
        "airline": "American",
        "terminal": "A",
        "terminalCoordinates": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInLocation": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInCounterName": "American Airlines Counter",
        "baggageDropName": "American Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.04317776100005
        ],
        "gateNumber": "D10",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T15:52:00"
    },
    {
        "flightNumber": "AM349",
        "airline": "American",
        "terminal": "A",
        "terminalCoordinates": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInLocation": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInCounterName": "American Airlines Counter",
        "baggageDropName": "American Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.0437694321231
        ],
        "gateNumber": "D11",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T12:15:00"
    },
    {
        "flightNumber": "AM377",
        "airline": "American",
        "terminal": "A",
        "terminalCoordinates": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInLocation": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInCounterName": "American Airlines Counter",
        "baggageDropName": "American Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580078533546,
            -97.04394555748067
        ],
        "gateNumber": "D12",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T13:13:00"
    },
    {
        "flightNumber": "AM158",
        "airline": "American",
        "terminal": "A",
        "terminalCoordinates": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInLocation": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInCounterName": "American Airlines Counter",
        "baggageDropName": "American Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89583082454296,
            -97.044553740356
        ],
        "gateNumber": "D14",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T18:28:00"
    },
    {
        "flightNumber": "AM775",
        "airline": "American",
        "terminal": "A",
        "terminalCoordinates": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInLocation": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInCounterName": "American Airlines Counter",
        "baggageDropName": "American Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89594635986158,
            -97.04467757849802
        ],
        "gateNumber": "D16",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T10:14:00"
    },
    {
        "flightNumber": "AM739",
        "airline": "American",
        "terminal": "A",
        "terminalCoordinates": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInLocation": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInCounterName": "American Airlines Counter",
        "baggageDropName": "American Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.8960156809804,
            -97.04476288921809
        ],
        "gateNumber": "D17",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T15:42:00"
    },
    {
        "flightNumber": "AM500",
        "airline": "American",
        "terminal": "A",
        "terminalCoordinates": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInLocation": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInCounterName": "American Airlines Counter",
        "baggageDropName": "American Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89637846061746,
            -97.04478490488779
        ],
        "gateNumber": "D18",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T11:58:00"
    },
    {
        "flightNumber": "AM205",
        "airline": "American",
        "terminal": "A",
        "terminalCoordinates": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInLocation": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInCounterName": "American Airlines Counter",
        "baggageDropName": "American Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89706704465068,
            -97.04485370385413
        ],
        "gateNumber": "D21",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T17:35:00"
    },
    {
        "flightNumber": "AM744",
        "airline": "American",
        "terminal": "A",
        "terminalCoordinates": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInLocation": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInCounterName": "American Airlines Counter",
        "baggageDropName": "American Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.897291179903256,
            -97.04485095189543
        ],
        "gateNumber": "D22",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T15:18:00"
    },
    {
        "flightNumber": "AM708",
        "airline": "American",
        "terminal": "A",
        "terminalCoordinates": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInLocation": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInCounterName": "American Airlines Counter",
        "baggageDropName": "American Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.898076849594034,
            -97.0448511489283
        ],
        "gateNumber": "D23",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T18:46:00"
    },
    {
        "flightNumber": "AM679",
        "airline": "American",
        "terminal": "A",
        "terminalCoordinates": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInLocation": [
            32.89646323824586,
            -97.04372127331136
        ],
        "checkInCounterName": "American Airlines Counter",
        "baggageDropName": "American Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89828084313302,
            -97.0448445825928
        ],
        "gateNumber": "D24",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T12:53:00"
    },
    {
        "flightNumber": "EM234",
        "airline": "Emirates",
        "terminal": "A",
        "terminalCoordinates": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInLocation": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInCounterName": "Emirates Airlines Counter",
        "baggageDropName": "Emirates Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895805406752274,
            -97.04226135876755
        ],
        "gateNumber": "D6",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T11:26:00"
    },
    {
        "flightNumber": "EM585",
        "airline": "Emirates",
        "terminal": "A",
        "terminalCoordinates": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInLocation": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInCounterName": "Emirates Airlines Counter",
        "baggageDropName": "Emirates Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895810028169244,
            -97.04239895670314
        ],
        "gateNumber": "D7",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T12:36:00"
    },
    {
        "flightNumber": "EM998",
        "airline": "Emirates",
        "terminal": "A",
        "terminalCoordinates": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInLocation": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInCounterName": "Emirates Airlines Counter",
        "baggageDropName": "Emirates Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89581927100244,
            -97.04298237195006
        ],
        "gateNumber": "D8",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T17:44:00"
    },
    {
        "flightNumber": "EM902",
        "airline": "Emirates",
        "terminal": "A",
        "terminalCoordinates": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInLocation": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInCounterName": "Emirates Airlines Counter",
        "baggageDropName": "Emirates Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.04317776100005
        ],
        "gateNumber": "D10",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T12:31:00"
    },
    {
        "flightNumber": "EM445",
        "airline": "Emirates",
        "terminal": "A",
        "terminalCoordinates": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInLocation": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInCounterName": "Emirates Airlines Counter",
        "baggageDropName": "Emirates Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.0437694321231
        ],
        "gateNumber": "D11",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T19:1:00"
    },
    {
        "flightNumber": "EM162",
        "airline": "Emirates",
        "terminal": "A",
        "terminalCoordinates": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInLocation": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInCounterName": "Emirates Airlines Counter",
        "baggageDropName": "Emirates Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580078533546,
            -97.04394555748067
        ],
        "gateNumber": "D12",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T19:8:00"
    },
    {
        "flightNumber": "EM747",
        "airline": "Emirates",
        "terminal": "A",
        "terminalCoordinates": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInLocation": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInCounterName": "Emirates Airlines Counter",
        "baggageDropName": "Emirates Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89583082454296,
            -97.044553740356
        ],
        "gateNumber": "D14",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T16:23:00"
    },
    {
        "flightNumber": "EM337",
        "airline": "Emirates",
        "terminal": "A",
        "terminalCoordinates": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInLocation": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInCounterName": "Emirates Airlines Counter",
        "baggageDropName": "Emirates Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89594635986158,
            -97.04467757849802
        ],
        "gateNumber": "D16",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T17:47:00"
    },
    {
        "flightNumber": "EM209",
        "airline": "Emirates",
        "terminal": "A",
        "terminalCoordinates": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInLocation": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInCounterName": "Emirates Airlines Counter",
        "baggageDropName": "Emirates Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.8960156809804,
            -97.04476288921809
        ],
        "gateNumber": "D17",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T17:54:00"
    },
    {
        "flightNumber": "EM851",
        "airline": "Emirates",
        "terminal": "A",
        "terminalCoordinates": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInLocation": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInCounterName": "Emirates Airlines Counter",
        "baggageDropName": "Emirates Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89637846061746,
            -97.04478490488779
        ],
        "gateNumber": "D18",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T14:26:00"
    },
    {
        "flightNumber": "EM142",
        "airline": "Emirates",
        "terminal": "A",
        "terminalCoordinates": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInLocation": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInCounterName": "Emirates Airlines Counter",
        "baggageDropName": "Emirates Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89706704465068,
            -97.04485370385413
        ],
        "gateNumber": "D21",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T13:32:00"
    },
    {
        "flightNumber": "EM772",
        "airline": "Emirates",
        "terminal": "A",
        "terminalCoordinates": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInLocation": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInCounterName": "Emirates Airlines Counter",
        "baggageDropName": "Emirates Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.897291179903256,
            -97.04485095189543
        ],
        "gateNumber": "D22",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T19:19:00"
    },
    {
        "flightNumber": "EM256",
        "airline": "Emirates",
        "terminal": "A",
        "terminalCoordinates": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInLocation": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInCounterName": "Emirates Airlines Counter",
        "baggageDropName": "Emirates Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.898076849594034,
            -97.0448511489283
        ],
        "gateNumber": "D23",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T19:37:00"
    },
    {
        "flightNumber": "EM890",
        "airline": "Emirates",
        "terminal": "A",
        "terminalCoordinates": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInLocation": [
            32.89667537897746,
            -97.04397207114613
        ],
        "checkInCounterName": "Emirates Airlines Counter",
        "baggageDropName": "Emirates Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89828084313302,
            -97.0448445825928
        ],
        "gateNumber": "D24",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T16:7:00"
    },
    {
        "flightNumber": "BR263",
        "airline": "British",
        "terminal": "A",
        "terminalCoordinates": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInLocation": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInCounterName": "British Airlines Counter",
        "baggageDropName": "British Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895805406752274,
            -97.04226135876755
        ],
        "gateNumber": "D6",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T15:25:00"
    },
    {
        "flightNumber": "BR179",
        "airline": "British",
        "terminal": "A",
        "terminalCoordinates": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInLocation": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInCounterName": "British Airlines Counter",
        "baggageDropName": "British Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895810028169244,
            -97.04239895670314
        ],
        "gateNumber": "D7",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T19:47:00"
    },
    {
        "flightNumber": "BR261",
        "airline": "British",
        "terminal": "A",
        "terminalCoordinates": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInLocation": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInCounterName": "British Airlines Counter",
        "baggageDropName": "British Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89581927100244,
            -97.04298237195006
        ],
        "gateNumber": "D8",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T16:42:00"
    },
    {
        "flightNumber": "BR831",
        "airline": "British",
        "terminal": "A",
        "terminalCoordinates": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInLocation": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInCounterName": "British Airlines Counter",
        "baggageDropName": "British Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.04317776100005
        ],
        "gateNumber": "D10",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T12:7:00"
    },
    {
        "flightNumber": "BR364",
        "airline": "British",
        "terminal": "A",
        "terminalCoordinates": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInLocation": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInCounterName": "British Airlines Counter",
        "baggageDropName": "British Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.0437694321231
        ],
        "gateNumber": "D11",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T11:57:00"
    },
    {
        "flightNumber": "BR693",
        "airline": "British",
        "terminal": "A",
        "terminalCoordinates": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInLocation": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInCounterName": "British Airlines Counter",
        "baggageDropName": "British Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580078533546,
            -97.04394555748067
        ],
        "gateNumber": "D12",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T17:1:00"
    },
    {
        "flightNumber": "BR405",
        "airline": "British",
        "terminal": "A",
        "terminalCoordinates": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInLocation": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInCounterName": "British Airlines Counter",
        "baggageDropName": "British Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89583082454296,
            -97.044553740356
        ],
        "gateNumber": "D14",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T17:25:00"
    },
    {
        "flightNumber": "BR372",
        "airline": "British",
        "terminal": "A",
        "terminalCoordinates": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInLocation": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInCounterName": "British Airlines Counter",
        "baggageDropName": "British Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89594635986158,
            -97.04467757849802
        ],
        "gateNumber": "D16",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T16:7:00"
    },
    {
        "flightNumber": "BR973",
        "airline": "British",
        "terminal": "A",
        "terminalCoordinates": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInLocation": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInCounterName": "British Airlines Counter",
        "baggageDropName": "British Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.8960156809804,
            -97.04476288921809
        ],
        "gateNumber": "D17",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T10:26:00"
    },
    {
        "flightNumber": "BR249",
        "airline": "British",
        "terminal": "A",
        "terminalCoordinates": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInLocation": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInCounterName": "British Airlines Counter",
        "baggageDropName": "British Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89637846061746,
            -97.04478490488779
        ],
        "gateNumber": "D18",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T19:5:00"
    },
    {
        "flightNumber": "BR955",
        "airline": "British",
        "terminal": "A",
        "terminalCoordinates": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInLocation": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInCounterName": "British Airlines Counter",
        "baggageDropName": "British Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89706704465068,
            -97.04485370385413
        ],
        "gateNumber": "D21",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T16:42:00"
    },
    {
        "flightNumber": "BR894",
        "airline": "British",
        "terminal": "A",
        "terminalCoordinates": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInLocation": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInCounterName": "British Airlines Counter",
        "baggageDropName": "British Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.897291179903256,
            -97.04485095189543
        ],
        "gateNumber": "D22",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T19:34:00"
    },
    {
        "flightNumber": "BR744",
        "airline": "British",
        "terminal": "A",
        "terminalCoordinates": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInLocation": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInCounterName": "British Airlines Counter",
        "baggageDropName": "British Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.898076849594034,
            -97.0448511489283
        ],
        "gateNumber": "D23",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T16:33:00"
    },
    {
        "flightNumber": "BR459",
        "airline": "British",
        "terminal": "A",
        "terminalCoordinates": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInLocation": [
            32.89672506400242,
            -97.04403887984196
        ],
        "checkInCounterName": "British Airlines Counter",
        "baggageDropName": "British Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89828084313302,
            -97.0448445825928
        ],
        "gateNumber": "D24",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T19:0:00"
    },
    {
        "flightNumber": "QA838",
        "airline": "Qantas",
        "terminal": "A",
        "terminalCoordinates": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInLocation": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInCounterName": "Qantas Airlines Counter",
        "baggageDropName": "Qantas Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895805406752274,
            -97.04226135876755
        ],
        "gateNumber": "D6",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T11:40:00"
    },
    {
        "flightNumber": "QA192",
        "airline": "Qantas",
        "terminal": "A",
        "terminalCoordinates": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInLocation": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInCounterName": "Qantas Airlines Counter",
        "baggageDropName": "Qantas Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895810028169244,
            -97.04239895670314
        ],
        "gateNumber": "D7",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T19:5:00"
    },
    {
        "flightNumber": "QA560",
        "airline": "Qantas",
        "terminal": "A",
        "terminalCoordinates": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInLocation": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInCounterName": "Qantas Airlines Counter",
        "baggageDropName": "Qantas Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89581927100244,
            -97.04298237195006
        ],
        "gateNumber": "D8",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T16:50:00"
    },
    {
        "flightNumber": "QA589",
        "airline": "Qantas",
        "terminal": "A",
        "terminalCoordinates": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInLocation": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInCounterName": "Qantas Airlines Counter",
        "baggageDropName": "Qantas Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.04317776100005
        ],
        "gateNumber": "D10",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T16:22:00"
    },
    {
        "flightNumber": "QA538",
        "airline": "Qantas",
        "terminal": "A",
        "terminalCoordinates": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInLocation": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInCounterName": "Qantas Airlines Counter",
        "baggageDropName": "Qantas Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.0437694321231
        ],
        "gateNumber": "D11",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T11:54:00"
    },
    {
        "flightNumber": "QA654",
        "airline": "Qantas",
        "terminal": "A",
        "terminalCoordinates": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInLocation": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInCounterName": "Qantas Airlines Counter",
        "baggageDropName": "Qantas Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580078533546,
            -97.04394555748067
        ],
        "gateNumber": "D12",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T16:11:00"
    },
    {
        "flightNumber": "QA124",
        "airline": "Qantas",
        "terminal": "A",
        "terminalCoordinates": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInLocation": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInCounterName": "Qantas Airlines Counter",
        "baggageDropName": "Qantas Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89583082454296,
            -97.044553740356
        ],
        "gateNumber": "D14",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T14:11:00"
    },
    {
        "flightNumber": "QA585",
        "airline": "Qantas",
        "terminal": "A",
        "terminalCoordinates": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInLocation": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInCounterName": "Qantas Airlines Counter",
        "baggageDropName": "Qantas Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89594635986158,
            -97.04467757849802
        ],
        "gateNumber": "D16",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T18:48:00"
    },
    {
        "flightNumber": "QA377",
        "airline": "Qantas",
        "terminal": "A",
        "terminalCoordinates": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInLocation": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInCounterName": "Qantas Airlines Counter",
        "baggageDropName": "Qantas Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.8960156809804,
            -97.04476288921809
        ],
        "gateNumber": "D17",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T12:31:00"
    },
    {
        "flightNumber": "QA844",
        "airline": "Qantas",
        "terminal": "A",
        "terminalCoordinates": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInLocation": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInCounterName": "Qantas Airlines Counter",
        "baggageDropName": "Qantas Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89637846061746,
            -97.04478490488779
        ],
        "gateNumber": "D18",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T17:9:00"
    },
    {
        "flightNumber": "QA884",
        "airline": "Qantas",
        "terminal": "A",
        "terminalCoordinates": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInLocation": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInCounterName": "Qantas Airlines Counter",
        "baggageDropName": "Qantas Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89706704465068,
            -97.04485370385413
        ],
        "gateNumber": "D21",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T12:59:00"
    },
    {
        "flightNumber": "QA858",
        "airline": "Qantas",
        "terminal": "A",
        "terminalCoordinates": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInLocation": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInCounterName": "Qantas Airlines Counter",
        "baggageDropName": "Qantas Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.897291179903256,
            -97.04485095189543
        ],
        "gateNumber": "D22",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T16:41:00"
    },
    {
        "flightNumber": "QA893",
        "airline": "Qantas",
        "terminal": "A",
        "terminalCoordinates": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInLocation": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInCounterName": "Qantas Airlines Counter",
        "baggageDropName": "Qantas Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.898076849594034,
            -97.0448511489283
        ],
        "gateNumber": "D23",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T14:52:00"
    },
    {
        "flightNumber": "QA721",
        "airline": "Qantas",
        "terminal": "A",
        "terminalCoordinates": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInLocation": [
            32.896761927067445,
            -97.04410187089805
        ],
        "checkInCounterName": "Qantas Airlines Counter",
        "baggageDropName": "Qantas Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89828084313302,
            -97.0448445825928
        ],
        "gateNumber": "D24",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T17:16:00"
    },
    {
        "flightNumber": "AI813",
        "airline": "Air",
        "terminal": "A",
        "terminalCoordinates": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInLocation": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInCounterName": "Air Airlines Counter",
        "baggageDropName": "Air Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895805406752274,
            -97.04226135876755
        ],
        "gateNumber": "D6",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T19:30:00"
    },
    {
        "flightNumber": "AI447",
        "airline": "Air",
        "terminal": "A",
        "terminalCoordinates": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInLocation": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInCounterName": "Air Airlines Counter",
        "baggageDropName": "Air Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895810028169244,
            -97.04239895670314
        ],
        "gateNumber": "D7",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T15:21:00"
    },
    {
        "flightNumber": "AI995",
        "airline": "Air",
        "terminal": "A",
        "terminalCoordinates": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInLocation": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInCounterName": "Air Airlines Counter",
        "baggageDropName": "Air Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89581927100244,
            -97.04298237195006
        ],
        "gateNumber": "D8",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T19:52:00"
    },
    {
        "flightNumber": "AI992",
        "airline": "Air",
        "terminal": "A",
        "terminalCoordinates": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInLocation": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInCounterName": "Air Airlines Counter",
        "baggageDropName": "Air Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.04317776100005
        ],
        "gateNumber": "D10",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T18:11:00"
    },
    {
        "flightNumber": "AI351",
        "airline": "Air",
        "terminal": "A",
        "terminalCoordinates": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInLocation": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInCounterName": "Air Airlines Counter",
        "baggageDropName": "Air Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.0437694321231
        ],
        "gateNumber": "D11",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T13:47:00"
    },
    {
        "flightNumber": "AI648",
        "airline": "Air",
        "terminal": "A",
        "terminalCoordinates": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInLocation": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInCounterName": "Air Airlines Counter",
        "baggageDropName": "Air Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580078533546,
            -97.04394555748067
        ],
        "gateNumber": "D12",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T17:47:00"
    },
    {
        "flightNumber": "AI540",
        "airline": "Air",
        "terminal": "A",
        "terminalCoordinates": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInLocation": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInCounterName": "Air Airlines Counter",
        "baggageDropName": "Air Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89583082454296,
            -97.044553740356
        ],
        "gateNumber": "D14",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T10:12:00"
    },
    {
        "flightNumber": "AI152",
        "airline": "Air",
        "terminal": "A",
        "terminalCoordinates": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInLocation": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInCounterName": "Air Airlines Counter",
        "baggageDropName": "Air Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89594635986158,
            -97.04467757849802
        ],
        "gateNumber": "D16",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T13:54:00"
    },
    {
        "flightNumber": "AI862",
        "airline": "Air",
        "terminal": "A",
        "terminalCoordinates": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInLocation": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInCounterName": "Air Airlines Counter",
        "baggageDropName": "Air Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.8960156809804,
            -97.04476288921809
        ],
        "gateNumber": "D17",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T16:51:00"
    },
    {
        "flightNumber": "AI706",
        "airline": "Air",
        "terminal": "A",
        "terminalCoordinates": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInLocation": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInCounterName": "Air Airlines Counter",
        "baggageDropName": "Air Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89637846061746,
            -97.04478490488779
        ],
        "gateNumber": "D18",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T13:15:00"
    },
    {
        "flightNumber": "AI409",
        "airline": "Air",
        "terminal": "A",
        "terminalCoordinates": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInLocation": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInCounterName": "Air Airlines Counter",
        "baggageDropName": "Air Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89706704465068,
            -97.04485370385413
        ],
        "gateNumber": "D21",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T13:7:00"
    },
    {
        "flightNumber": "AI738",
        "airline": "Air",
        "terminal": "A",
        "terminalCoordinates": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInLocation": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInCounterName": "Air Airlines Counter",
        "baggageDropName": "Air Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.897291179903256,
            -97.04485095189543
        ],
        "gateNumber": "D22",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T13:53:00"
    },
    {
        "flightNumber": "AI926",
        "airline": "Air",
        "terminal": "A",
        "terminalCoordinates": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInLocation": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInCounterName": "Air Airlines Counter",
        "baggageDropName": "Air Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.898076849594034,
            -97.0448511489283
        ],
        "gateNumber": "D23",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T16:28:00"
    },
    {
        "flightNumber": "AI751",
        "airline": "Air",
        "terminal": "A",
        "terminalCoordinates": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInLocation": [
            32.896811612046506,
            -97.0441543634428
        ],
        "checkInCounterName": "Air Airlines Counter",
        "baggageDropName": "Air Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89828084313302,
            -97.0448445825928
        ],
        "gateNumber": "D24",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T12:0:00"
    },
    {
        "flightNumber": "LU981",
        "airline": "Lufthansa",
        "terminal": "A",
        "terminalCoordinates": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInLocation": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInCounterName": "Lufthansa Airlines Counter",
        "baggageDropName": "Lufthansa Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895805406752274,
            -97.04226135876755
        ],
        "gateNumber": "D6",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T12:15:00"
    },
    {
        "flightNumber": "LU246",
        "airline": "Lufthansa",
        "terminal": "A",
        "terminalCoordinates": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInLocation": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInCounterName": "Lufthansa Airlines Counter",
        "baggageDropName": "Lufthansa Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895810028169244,
            -97.04239895670314
        ],
        "gateNumber": "D7",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T15:45:00"
    },
    {
        "flightNumber": "LU169",
        "airline": "Lufthansa",
        "terminal": "A",
        "terminalCoordinates": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInLocation": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInCounterName": "Lufthansa Airlines Counter",
        "baggageDropName": "Lufthansa Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89581927100244,
            -97.04298237195006
        ],
        "gateNumber": "D8",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T10:45:00"
    },
    {
        "flightNumber": "LU883",
        "airline": "Lufthansa",
        "terminal": "A",
        "terminalCoordinates": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInLocation": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInCounterName": "Lufthansa Airlines Counter",
        "baggageDropName": "Lufthansa Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.04317776100005
        ],
        "gateNumber": "D10",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T18:56:00"
    },
    {
        "flightNumber": "LU729",
        "airline": "Lufthansa",
        "terminal": "A",
        "terminalCoordinates": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInLocation": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInCounterName": "Lufthansa Airlines Counter",
        "baggageDropName": "Lufthansa Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.0437694321231
        ],
        "gateNumber": "D11",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T18:11:00"
    },
    {
        "flightNumber": "LU594",
        "airline": "Lufthansa",
        "terminal": "A",
        "terminalCoordinates": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInLocation": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInCounterName": "Lufthansa Airlines Counter",
        "baggageDropName": "Lufthansa Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580078533546,
            -97.04394555748067
        ],
        "gateNumber": "D12",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T11:10:00"
    },
    {
        "flightNumber": "LU849",
        "airline": "Lufthansa",
        "terminal": "A",
        "terminalCoordinates": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInLocation": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInCounterName": "Lufthansa Airlines Counter",
        "baggageDropName": "Lufthansa Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89583082454296,
            -97.044553740356
        ],
        "gateNumber": "D14",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T15:1:00"
    },
    {
        "flightNumber": "LU520",
        "airline": "Lufthansa",
        "terminal": "A",
        "terminalCoordinates": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInLocation": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInCounterName": "Lufthansa Airlines Counter",
        "baggageDropName": "Lufthansa Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89594635986158,
            -97.04467757849802
        ],
        "gateNumber": "D16",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T12:55:00"
    },
    {
        "flightNumber": "LU774",
        "airline": "Lufthansa",
        "terminal": "A",
        "terminalCoordinates": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInLocation": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInCounterName": "Lufthansa Airlines Counter",
        "baggageDropName": "Lufthansa Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.8960156809804,
            -97.04476288921809
        ],
        "gateNumber": "D17",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T19:44:00"
    },
    {
        "flightNumber": "LU377",
        "airline": "Lufthansa",
        "terminal": "A",
        "terminalCoordinates": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInLocation": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInCounterName": "Lufthansa Airlines Counter",
        "baggageDropName": "Lufthansa Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89637846061746,
            -97.04478490488779
        ],
        "gateNumber": "D18",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T12:32:00"
    },
    {
        "flightNumber": "LU500",
        "airline": "Lufthansa",
        "terminal": "A",
        "terminalCoordinates": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInLocation": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInCounterName": "Lufthansa Airlines Counter",
        "baggageDropName": "Lufthansa Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89706704465068,
            -97.04485370385413
        ],
        "gateNumber": "D21",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T13:33:00"
    },
    {
        "flightNumber": "LU374",
        "airline": "Lufthansa",
        "terminal": "A",
        "terminalCoordinates": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInLocation": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInCounterName": "Lufthansa Airlines Counter",
        "baggageDropName": "Lufthansa Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.897291179903256,
            -97.04485095189543
        ],
        "gateNumber": "D22",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T10:45:00"
    },
    {
        "flightNumber": "LU693",
        "airline": "Lufthansa",
        "terminal": "A",
        "terminalCoordinates": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInLocation": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInCounterName": "Lufthansa Airlines Counter",
        "baggageDropName": "Lufthansa Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.898076849594034,
            -97.0448511489283
        ],
        "gateNumber": "D23",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T17:14:00"
    },
    {
        "flightNumber": "LU499",
        "airline": "Lufthansa",
        "terminal": "A",
        "terminalCoordinates": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInLocation": [
            32.89686530384453,
            -97.04420971921938
        ],
        "checkInCounterName": "Lufthansa Airlines Counter",
        "baggageDropName": "Lufthansa Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89828084313302,
            -97.0448445825928
        ],
        "gateNumber": "D24",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T18:7:00"
    },
    {
        "flightNumber": "AE444",
        "airline": "Aeromexico",
        "terminal": "A",
        "terminalCoordinates": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInLocation": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInCounterName": "Aeromexico Airlines Counter",
        "baggageDropName": "Aeromexico Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895805406752274,
            -97.04226135876755
        ],
        "gateNumber": "D6",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T15:55:00"
    },
    {
        "flightNumber": "AE201",
        "airline": "Aeromexico",
        "terminal": "A",
        "terminalCoordinates": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInLocation": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInCounterName": "Aeromexico Airlines Counter",
        "baggageDropName": "Aeromexico Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895810028169244,
            -97.04239895670314
        ],
        "gateNumber": "D7",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T14:0:00"
    },
    {
        "flightNumber": "AE973",
        "airline": "Aeromexico",
        "terminal": "A",
        "terminalCoordinates": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInLocation": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInCounterName": "Aeromexico Airlines Counter",
        "baggageDropName": "Aeromexico Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89581927100244,
            -97.04298237195006
        ],
        "gateNumber": "D8",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T17:5:00"
    },
    {
        "flightNumber": "AE976",
        "airline": "Aeromexico",
        "terminal": "A",
        "terminalCoordinates": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInLocation": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInCounterName": "Aeromexico Airlines Counter",
        "baggageDropName": "Aeromexico Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.04317776100005
        ],
        "gateNumber": "D10",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T11:59:00"
    },
    {
        "flightNumber": "AE199",
        "airline": "Aeromexico",
        "terminal": "A",
        "terminalCoordinates": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInLocation": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInCounterName": "Aeromexico Airlines Counter",
        "baggageDropName": "Aeromexico Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.0437694321231
        ],
        "gateNumber": "D11",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T13:27:00"
    },
    {
        "flightNumber": "AE473",
        "airline": "Aeromexico",
        "terminal": "A",
        "terminalCoordinates": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInLocation": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInCounterName": "Aeromexico Airlines Counter",
        "baggageDropName": "Aeromexico Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580078533546,
            -97.04394555748067
        ],
        "gateNumber": "D12",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T18:10:00"
    },
    {
        "flightNumber": "AE549",
        "airline": "Aeromexico",
        "terminal": "A",
        "terminalCoordinates": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInLocation": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInCounterName": "Aeromexico Airlines Counter",
        "baggageDropName": "Aeromexico Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89583082454296,
            -97.044553740356
        ],
        "gateNumber": "D14",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T19:28:00"
    },
    {
        "flightNumber": "AE805",
        "airline": "Aeromexico",
        "terminal": "A",
        "terminalCoordinates": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInLocation": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInCounterName": "Aeromexico Airlines Counter",
        "baggageDropName": "Aeromexico Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89594635986158,
            -97.04467757849802
        ],
        "gateNumber": "D16",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T16:12:00"
    },
    {
        "flightNumber": "AE265",
        "airline": "Aeromexico",
        "terminal": "A",
        "terminalCoordinates": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInLocation": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInCounterName": "Aeromexico Airlines Counter",
        "baggageDropName": "Aeromexico Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.8960156809804,
            -97.04476288921809
        ],
        "gateNumber": "D17",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T16:8:00"
    },
    {
        "flightNumber": "AE246",
        "airline": "Aeromexico",
        "terminal": "A",
        "terminalCoordinates": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInLocation": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInCounterName": "Aeromexico Airlines Counter",
        "baggageDropName": "Aeromexico Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89706704465068,
            -97.04485370385413
        ],
        "gateNumber": "D21",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T16:11:00"
    },
    {
        "flightNumber": "AE311",
        "airline": "Aeromexico",
        "terminal": "A",
        "terminalCoordinates": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInLocation": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInCounterName": "Aeromexico Airlines Counter",
        "baggageDropName": "Aeromexico Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.897291179903256,
            -97.04485095189543
        ],
        "gateNumber": "D22",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T18:49:00"
    },
    {
        "flightNumber": "AE399",
        "airline": "Aeromexico",
        "terminal": "A",
        "terminalCoordinates": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInLocation": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInCounterName": "Aeromexico Airlines Counter",
        "baggageDropName": "Aeromexico Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.898076849594034,
            -97.0448511489283
        ],
        "gateNumber": "D23",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T12:9:00"
    },
    {
        "flightNumber": "AE679",
        "airline": "Aeromexico",
        "terminal": "A",
        "terminalCoordinates": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInLocation": [
            32.89691579013238,
            -97.04422785300824
        ],
        "checkInCounterName": "Aeromexico Airlines Counter",
        "baggageDropName": "Aeromexico Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89828084313302,
            -97.0448445825928
        ],
        "gateNumber": "D24",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T19:59:00"
    },
    {
        "flightNumber": "SU366",
        "airline": "Sun",
        "terminal": "A",
        "terminalCoordinates": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInLocation": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInCounterName": "Sun Airlines Counter",
        "baggageDropName": "Sun Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895805406752274,
            -97.04226135876755
        ],
        "gateNumber": "D6",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T11:41:00"
    },
    {
        "flightNumber": "SU466",
        "airline": "Sun",
        "terminal": "A",
        "terminalCoordinates": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInLocation": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInCounterName": "Sun Airlines Counter",
        "baggageDropName": "Sun Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895810028169244,
            -97.04239895670314
        ],
        "gateNumber": "D7",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T12:57:00"
    },
    {
        "flightNumber": "SU843",
        "airline": "Sun",
        "terminal": "A",
        "terminalCoordinates": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInLocation": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInCounterName": "Sun Airlines Counter",
        "baggageDropName": "Sun Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89581927100244,
            -97.04298237195006
        ],
        "gateNumber": "D8",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T16:19:00"
    },
    {
        "flightNumber": "SU661",
        "airline": "Sun",
        "terminal": "A",
        "terminalCoordinates": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInLocation": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInCounterName": "Sun Airlines Counter",
        "baggageDropName": "Sun Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.04317776100005
        ],
        "gateNumber": "D10",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T18:30:00"
    },
    {
        "flightNumber": "SU214",
        "airline": "Sun",
        "terminal": "A",
        "terminalCoordinates": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInLocation": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInCounterName": "Sun Airlines Counter",
        "baggageDropName": "Sun Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.0437694321231
        ],
        "gateNumber": "D11",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T10:22:00"
    },
    {
        "flightNumber": "SU331",
        "airline": "Sun",
        "terminal": "A",
        "terminalCoordinates": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInLocation": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInCounterName": "Sun Airlines Counter",
        "baggageDropName": "Sun Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580078533546,
            -97.04394555748067
        ],
        "gateNumber": "D12",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T11:58:00"
    },
    {
        "flightNumber": "SU993",
        "airline": "Sun",
        "terminal": "A",
        "terminalCoordinates": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInLocation": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInCounterName": "Sun Airlines Counter",
        "baggageDropName": "Sun Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89583082454296,
            -97.044553740356
        ],
        "gateNumber": "D14",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T14:19:00"
    },
    {
        "flightNumber": "SU245",
        "airline": "Sun",
        "terminal": "A",
        "terminalCoordinates": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInLocation": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInCounterName": "Sun Airlines Counter",
        "baggageDropName": "Sun Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89594635986158,
            -97.04467757849802
        ],
        "gateNumber": "D16",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T10:31:00"
    },
    {
        "flightNumber": "SU323",
        "airline": "Sun",
        "terminal": "A",
        "terminalCoordinates": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInLocation": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInCounterName": "Sun Airlines Counter",
        "baggageDropName": "Sun Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.8960156809804,
            -97.04476288921809
        ],
        "gateNumber": "D17",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T12:18:00"
    },
    {
        "flightNumber": "SU840",
        "airline": "Sun",
        "terminal": "A",
        "terminalCoordinates": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInLocation": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInCounterName": "Sun Airlines Counter",
        "baggageDropName": "Sun Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89637846061746,
            -97.04478490488779
        ],
        "gateNumber": "D18",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T10:0:00"
    },
    {
        "flightNumber": "SU861",
        "airline": "Sun",
        "terminal": "A",
        "terminalCoordinates": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInLocation": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInCounterName": "Sun Airlines Counter",
        "baggageDropName": "Sun Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89706704465068,
            -97.04485370385413
        ],
        "gateNumber": "D21",
        "status": "On Time",
        "estimatedDeparture": "2025-04-01T17:52:00"
    },
    {
        "flightNumber": "SU317",
        "airline": "Sun",
        "terminal": "A",
        "terminalCoordinates": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInLocation": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInCounterName": "Sun Airlines Counter",
        "baggageDropName": "Sun Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.897291179903256,
            -97.04485095189543
        ],
        "gateNumber": "D22",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T11:58:00"
    },
    {
        "flightNumber": "SU737",
        "airline": "Sun",
        "terminal": "A",
        "terminalCoordinates": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInLocation": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInCounterName": "Sun Airlines Counter",
        "baggageDropName": "Sun Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.898076849594034,
            -97.0448511489283
        ],
        "gateNumber": "D23",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T17:36:00"
    },
    {
        "flightNumber": "SU327",
        "airline": "Sun",
        "terminal": "A",
        "terminalCoordinates": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInLocation": [
            32.89696707776042,
            -97.04422021772871
        ],
        "checkInCounterName": "Sun Airlines Counter",
        "baggageDropName": "Sun Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89828084313302,
            -97.0448445825928
        ],
        "gateNumber": "D24",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T10:40:00"
    },
    {
        "flightNumber": "AV491",
        "airline": "Avianca",
        "terminal": "A",
        "terminalCoordinates": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInLocation": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInCounterName": "Avianca Airlines Counter",
        "baggageDropName": "Avianca Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895805406752274,
            -97.04226135876755
        ],
        "gateNumber": "D6",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T12:52:00"
    },
    {
        "flightNumber": "AV453",
        "airline": "Avianca",
        "terminal": "A",
        "terminalCoordinates": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInLocation": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInCounterName": "Avianca Airlines Counter",
        "baggageDropName": "Avianca Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.895810028169244,
            -97.04239895670314
        ],
        "gateNumber": "D7",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T11:37:00"
    },
    {
        "flightNumber": "AV412",
        "airline": "Avianca",
        "terminal": "A",
        "terminalCoordinates": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInLocation": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInCounterName": "Avianca Airlines Counter",
        "baggageDropName": "Avianca Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89581927100244,
            -97.04298237195006
        ],
        "gateNumber": "D8",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T18:19:00"
    },
    {
        "flightNumber": "AV322",
        "airline": "Avianca",
        "terminal": "A",
        "terminalCoordinates": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInLocation": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInCounterName": "Avianca Airlines Counter",
        "baggageDropName": "Avianca Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.04317776100005
        ],
        "gateNumber": "D10",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T15:22:00"
    },
    {
        "flightNumber": "AV447",
        "airline": "Avianca",
        "terminal": "A",
        "terminalCoordinates": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInLocation": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInCounterName": "Avianca Airlines Counter",
        "baggageDropName": "Avianca Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580540675266,
            -97.0437694321231
        ],
        "gateNumber": "D11",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T15:0:00"
    },
    {
        "flightNumber": "AV984",
        "airline": "Avianca",
        "terminal": "A",
        "terminalCoordinates": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInLocation": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInCounterName": "Avianca Airlines Counter",
        "baggageDropName": "Avianca Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89580078533546,
            -97.04394555748067
        ],
        "gateNumber": "D12",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T14:53:00"
    },
    {
        "flightNumber": "AV971",
        "airline": "Avianca",
        "terminal": "A",
        "terminalCoordinates": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInLocation": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInCounterName": "Avianca Airlines Counter",
        "baggageDropName": "Avianca Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89583082454296,
            -97.044553740356
        ],
        "gateNumber": "D14",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T18:23:00"
    },
    {
        "flightNumber": "AV897",
        "airline": "Avianca",
        "terminal": "A",
        "terminalCoordinates": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInLocation": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInCounterName": "Avianca Airlines Counter",
        "baggageDropName": "Avianca Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89594635986158,
            -97.04467757849802
        ],
        "gateNumber": "D16",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T17:33:00"
    },
    {
        "flightNumber": "AV687",
        "airline": "Avianca",
        "terminal": "A",
        "terminalCoordinates": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInLocation": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInCounterName": "Avianca Airlines Counter",
        "baggageDropName": "Avianca Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.8960156809804,
            -97.04476288921809
        ],
        "gateNumber": "D17",
        "status": "On Time",
        "estimatedDeparture": "2025-04-03T18:21:00"
    },
    {
        "flightNumber": "AV367",
        "airline": "Avianca",
        "terminal": "A",
        "terminalCoordinates": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInLocation": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInCounterName": "Avianca Airlines Counter",
        "baggageDropName": "Avianca Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89637846061746,
            -97.04478490488779
        ],
        "gateNumber": "D18",
        "status": "On Time",
        "estimatedDeparture": "2025-04-02T10:33:00"
    },
    {
        "flightNumber": "AV573",
        "airline": "Avianca",
        "terminal": "A",
        "terminalCoordinates": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInLocation": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInCounterName": "Avianca Airlines Counter",
        "baggageDropName": "Avianca Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89706704465068,
            -97.04485370385413
        ],
        "gateNumber": "D21",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-02T14:49:00"
    },
    {
        "flightNumber": "AV538",
        "airline": "Avianca",
        "terminal": "A",
        "terminalCoordinates": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInLocation": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInCounterName": "Avianca Airlines Counter",
        "baggageDropName": "Avianca Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.897291179903256,
            -97.04485095189543
        ],
        "gateNumber": "D22",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-01T10:14:00"
    },
    {
        "flightNumber": "AV295",
        "airline": "Avianca",
        "terminal": "A",
        "terminalCoordinates": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInLocation": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInCounterName": "Avianca Airlines Counter",
        "baggageDropName": "Avianca Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.898076849594034,
            -97.0448511489283
        ],
        "gateNumber": "D23",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T19:15:00"
    },
    {
        "flightNumber": "AV832",
        "airline": "Avianca",
        "terminal": "A",
        "terminalCoordinates": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInLocation": [
            32.897019166727254,
            -97.04420590157962
        ],
        "checkInCounterName": "Avianca Airlines Counter",
        "baggageDropName": "Avianca Baggage Drop",
        "securityLocation": [
            32.8964521057037,
            -97.04408651397681
        ],
        "gateLocation": [
            32.89828084313302,
            -97.0448445825928
        ],
        "gateNumber": "D24",
        "status": "Delayed",
        "estimatedDeparture": "2025-04-03T19:17:00"
    }
]


const filterFlightByNumber = (flightNumber) => {
    return sampleData.filter(flight => flight.flightNumber === flightNumber);
};

export default filterFlightByNumber
