function safeString(value) {
    return value ? String(value) : " ";
}

function getAirportName(code) {
    let foundAirport = null;

    for (const region in airportData) {
        foundAirport = airportData[region].find(airport => airport.icao === code);

        if (foundAirport) {
            break;
        }
    }

    return foundAirport ? foundAirport.name.toUpperCase() : code;
}