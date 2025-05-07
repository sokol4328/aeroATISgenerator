var airportCode = "";
var atisLetter = "";
var time = "";

var wind = "";
var visibility = "";
var clouds = "";
var temp = "";
var altimeter = "";

var approachType = "";
var arrivalRunway = "";

var departureRunway = "";

var positionToContact = "";
var positionToContactName = "";
var frequency = "";
var forWhat = "";

var textPilotInstructions = "PING FOR EVERY TRANSMISSION";
var pdcAvailable = "";

var serverCode = "";

updateAtis();

document.getElementById("airport").addEventListener("input", function () {
    airportCode = this.value.toUpperCase();
    this.value = airportCode;
    updateAtis();
    getStationOptions(airportCode);
});

document.getElementById("atisLetter").addEventListener("input", function () {
    atisLetter = this.value.toUpperCase();
    this.value = atisLetter;
    updateAtis();
});

document.getElementById("time").addEventListener("input", function () {
    time = this.value.toUpperCase();
    this.value = time;
    updateAtis();
});

document.getElementById("wind").addEventListener("input", function () {
    wind = this.value.toUpperCase();
    this.value = wind;
    updateAtis();
});

document.getElementById("visibility").addEventListener("input", function () {
    visibility = this.value.toUpperCase();
    this.value = visibility;
    updateAtis();
});

document.getElementById("cloudLayers").addEventListener("input", function () {
    clouds = this.value.toUpperCase();
    this.value = clouds;
    updateAtis();
});

document.getElementById("temperature").addEventListener("input", function () {
    temp = this.value.toUpperCase();
    this.value = temp;
    updateAtis();
});

document.getElementById("altimeter").addEventListener("input", function () {
    altimeter = this.value.toUpperCase();
    this.value = altimeter;
    updateAtis();
});

document.getElementById("approachType").addEventListener("input", function () {
    approachType = this.value.toUpperCase();
    this.value = approachType;
    updateAtis();
});

document.getElementById("arrivalRunway").addEventListener("input", function () {
    arrivalRunway = this.value.toUpperCase();
    this.value = arrivalRunway;
    updateAtis();
});

document.getElementById("departureRunway").addEventListener("input", function () {
    departureRunway = this.value.toUpperCase();
    this.value = departureRunway;
    updateAtis();
});

document.getElementById("positionToContact").addEventListener("change", function () {
    positionToContact = this.value;
    updateAtis();
});

document.getElementById("textPilotInstructions").addEventListener("input", function () {
    textPilotInstructions = this.value.toUpperCase();
    this.value = textPilotInstructions;
    updateAtis();
});

document.getElementById("pdc").addEventListener("change", function () {
    if (this.checked) {
        pdcAvailable = "PDC AVAILABLE, THROUGHT DM'S";
    } else {
        pdcAvailable = "PDC NOT AVAILABLE";
    }
    updateAtis();
});

document.getElementById("serverCode").addEventListener("input", function () {
    serverCode = this.value.toUpperCase();
    this.value = serverCode;
    updateAtis();
});

function updateAtis() {
    var result = splitStationString(positionToContact)

    positionToContactName = result.name
    frequency = result.frequency

    if (positionToContactName == "DEL")
    {
        forWhat = "CLNC"
    } else {
        forWhat = "CLNC AND TAXI INSTRUCTIONS"
    };

    const depRunwayLine = (departureRunway != "" && departureRunway !== arrivalRunway)
  ? "DEP " + safeString(departureRunway) + "\n"
  : "";

    var atis1 = safeString(airportCode) + " ATIS INFO " + safeString(atisLetter) + " " + safeString(time) + "\n"
    + safeString(wind) + " " + safeString(visibility) + " " + safeString(clouds) + " " + safeString(temp) + " " + safeString(altimeter) + "\n"
    + safeString(approachType) + " APCH " + safeString(arrivalRunway) + " IN USE" + "\n"
    + depRunwayLine
    + "READBACK ALL RUNWAY HOLD SHORT INSTRUCTIONS" + "\n"
    + "CONTACT " + safeString(positionToContactName) + " ON " + safeString(frequency) + " FOR " + safeString(forWhat) + "\n"
    + safeString(textPilotInstructions) + " | " + safeString(pdcAvailable) + "\n"
    + "SERVER CODE " + safeString(serverCode) + "\n"
    + "...ADVIS YOU HAVE " + safeString(atisLetter);

    document.getElementById("atisArea").value = atis1;
    
}

/* [AIRPORT IDENTIFIER] ATIS INFO [ATIS LETTER] [TIME IN UTC]
[WIND] [VISIBILITY] [CLOUD LAYER(S)] [TEMPERATURE/DEW POINT] [ALTIMETER]
[APPROACH (VISUAL, ILS, RNAV = GPS, VOR)] APCH [RUNWAY] IN USE (ONLY STATE ONE TYPE OF APCH)
DEP [RWY] (ONLY STATE IF DEPARTURE-ONLY RUNWAY IS DIFFERENT FROM APPROACH RUNWAY)
READBACK ALL RUNWAY HOLD SHORT INSTRUCTIONS
CONTACT [POSITION] ON [FREQUENCY] FOR [“CLNC” OR “CLNC AND TAXI INSTRUCTIONS”]
[TEXT PILOT INSTRUCTIONS | PDC AVAILABILITY]
SERVER CODE [Y]
…ADVIS YOU HAVE [ATIS LETTER]
*/

function checkRequiredFields() {
    const requiredFields = document.querySelectorAll(".values [required]");
    let allFilled = true;

    requiredFields.forEach(function (field) {
        if (!field.value) {
            allFilled = false;
            field.style.borderColor = "red"; // Highlight in red
        } else {
            field.style.borderColor = ""; // Reset border color
        }
    });

    if (!allFilled) {
        alert("Please fill in all required fields.");
    } else {
        var atisArea = document.getElementById("atisArea");
        atisArea.select();
        document.execCommand("copy");
        alert("ATIS copied to clipboard!");
    }
}