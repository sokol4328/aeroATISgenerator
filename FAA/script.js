var airportCode = "";
var atisLetter = "A";
var time = "";

var departureRunway = "";
var arrivalRunway = "";

var wind = "";
var visibility = "";
var cloudLayers = "";
var temp = "";
var qnh = "1013";

var transitionLevel = "60";

var airportName = "";

var textPilotInstructions = "PING FOR EVERY TRANSMISSION";
var pdcAvailable = "PDC NOT AVAILABLE";

var serverCode = "";

updateAtis();

document.getElementById("airport").addEventListener("input", function () {
    airportCode = this.value.toUpperCase();
    this.value = airportCode;
    updateAtis();
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
document.getElementById("departureRunway").addEventListener("input", function () {
    departureRunway = this.value.toUpperCase();
    this.value = departureRunway;
    updateAtis();
});
document.getElementById("arrivalRunway").addEventListener("input", function () {
    arrivalRunway = this.value.toUpperCase();
    this.value = arrivalRunway;
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
    cloudLayers = this.value.toUpperCase();
    this.value = cloudLayers;
    updateAtis();
});
document.getElementById("temp").addEventListener("input", function () {
    temp = this.value.toUpperCase();
    this.value = temp;
    updateAtis();
});
document.getElementById("qnh").addEventListener("input", function () {
    qnh = this.value.toUpperCase();
    this.value = qnh;
    updateAtis();
});
document.getElementById("tl").addEventListener("input", function () {
    transitionLevel = this.value.toUpperCase();
    this.value = transitionLevel;
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
    var atis = safeString(airportCode) + " ATIS INFO " + safeString(atisLetter) + " TIME " + safeString(time) + "\n" +
        "DEP RWY " + safeString(departureRunway) + " ARR RWY " + safeString(arrivalRunway) + " IN USE" + "\n" +
        safeString(wind) + " " + safeString(visibility) + " " + safeString(cloudLayers) + " " + safeString(temp) + " " + safeString(qnh) + "\n" +
        "TRANSITION LEVEL " + safeString(transitionLevel) + "\n" +
        "ACKNOWLEDGE RECEIPT OF INFORMATION " + safeString(atisLetter) + "\n" +
        "AND ADVISE AFCT TYPE ON FIRST CONTACT WITH " + getAirportName(airportCode) + "\n" +
        "TEXT PILOTS " + safeString(textPilotInstructions) + "|" + pdcAvailable + "\n" +
        "SERVER CODE " + safeString(serverCode);

    document.getElementById("atisArea").value = atis;
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