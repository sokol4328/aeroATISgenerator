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

function getSubstringAfterSlash(str) {
  const parts = str.split('/');
  return parts.length > 1 ? parts[1] : '';
}

function getSubstringBeforeSlash(str) {
  const parts = str.split('/');
  return parts[0] || '';
}

function getStationOptions(icaoCode) {
  // Flatten all airports from all keys in airportData
  const allAirports = Object.values(airportData).flat();

  // Find the airport by ICAO code
  const airport = allAirports.find(
    (airport) => airport.icao.toUpperCase() === icaoCode.toUpperCase()
  );

  // Reference to the select element
  const stationSelect = document.getElementById('positionToContact');

  // Clear existing options
  stationSelect.innerHTML = '';

  const defaultOption = document.createElement('option');
  defaultOption.textContent = 'SELECT STATION';
  defaultOption.value = '';
  defaultOption.disabled = true;
  defaultOption.selected = true;
  stationSelect.appendChild(defaultOption);

  if (!airport || !Array.isArray(airport.stations)) {
    // If no stations found, disable the select
    stationSelect.disabled = true;
    return;
  }

  // Populate the select with new options
  airport.stations.forEach((station) => {
    const option = document.createElement('option');
    option.value = `${station.type} (${station.frequency})`
    option.textContent = `${station.type} (${station.frequency})`;
    stationSelect.appendChild(option);
  });

  // Enable the select
  stationSelect.disabled = false;
}



function splitStationString(input) {
  const trimmedInput = input.trim();

  const match = trimmedInput.match(/^(.+?)\s*\(([^)]+)\)$/);

  if (match) {
    const name = match[1].trim();
    const frequency = match[2].trim();
    return { name, frequency };
  } else {
    return { name: trimmedInput, frequency: "Hehe" };
  }
}