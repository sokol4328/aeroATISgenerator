var airportCode = "";
var atisLetter = "A";
var time = "";

var departureRunway = "";
var arrivalRunway = "";

var wind = "";
var visibility = "";
var cloudLayers = "";
var temp = "";
var dewPoint = temp.split("/")[1];
var temperature = temp.split("/")[0];
var qnh = "1013";

var expectApproach = "ILS";

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
document.getElementById("expectApproach").addEventListener("input", function () {
    expectApproach = this.value.toUpperCase();
    this.value = expectApproach;
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
    temperature = getSubstringBeforeSlash(temp);
    dewPoint = getSubstringAfterSlash(temp);
    var atis = safeString(airportCode) + " ATIS " + safeString(atisLetter) + " " + safeString(time) + "\n" +
        "DEPARTURES " + safeString(departureRunway) + ". ARRIVALS " + safeString(arrivalRunway)  + "\n" +
        "EXP " + safeString(expectApproach) + " APCH.\n" +
        safeString(wind) + " VIS " + safeString(visibility) + " CLD " + safeString(cloudLayers) + " T" + safeString(temperature) + " D" + safeString(dewPoint) + " QNH "+ safeString(qnh) + "\n" +
        "TEXT PILOTS " + safeString(textPilotInstructions) + "|" + pdcAvailable + "\n" +
        "SERVER CODE " + safeString(serverCode) + "\n" +
        "ACKNOWLEDGE INFO " + safeString(atisLetter) + " ON FIRST CTC WITH APP OR DEL";
    document.getElementById("atisArea").value = atis;
}

/*[AIRPORT IDENTIFIER] ATIS [ATIS LETTER] [TIME IN UTC]
DEPARTURES [DEPARTURE RWY(S)]. ARRIVALS [ARRIVAL RWY(S)]
EXP [APPROACH] APCH.
WIND [WIND] VIS [VISIBILITY] CLD [CLOUD LAYER(S)] T[TEMPERATURE]  D[DEW POINT] QNH [QNH]
[TEXT PILOT INSTRUCTIONS | PDC AVAILABILITY]
SERVER CODE [Y]
ACKNOWLEDGE INFO [ATIS LETTER] ON FIRST CTC WITH APP OR DEL*/

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