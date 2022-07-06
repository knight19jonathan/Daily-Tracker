console.log("linked");
var nine = document.querySelector("#nineHundred")
var ten = document.querySelector("#tenHundred")
var eleven = document.querySelector("#elevenHundred")
var twelve = document.querySelector("#twelveHundred")
var thirteen = document.querySelector("#thirteenHundred")
var fourteen = document.querySelector("#fourteenHundred")
var fifteen = document.querySelector("#fifteenHundred")
var sixteen = document.querySelector("#sixteenHundred")
var seveteen = document.querySelector("#seventeenhundred")

var saveEvent = document.querySelectorAll(".saveBtn")

var evntNine = document.querySelector("#eventsAtNine")


var evntTen = document.querySelector("#eventsAtTen")
var evntEleven = document.querySelector("#eventsAtEleven")
var evntTwelve = document.querySelector("#eventsAtTwelve")
var evntOne = document.querySelector("#eventsAtOne")
var evntTwo = document.querySelector("#eventsAtTwo")
var evntThree = document.querySelector("#eventsAtThree")
var evntFour = document.querySelector("#eventsAtFour")
var evntFive = document.querySelector("#eventsAtFive")





let currentHourBar = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seveteen, "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three"]

var reformatDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(reformatDate);

$("#currentDay").text(reformatDate);



var a = moment().hours();

console.log(a);

function init() {
    setInterval(function () {
        var reformatDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        $("#currentDay").text(reformatDate)
    }, 1000);
}

function savedEvents() {
    evntNine = localStorage.getItem("eventsAtNine")
    console.log(evntNine);
    
    if (evntNine == null) {
        console.log(evntNine);
        document.querySelector("#eventsAtNine").textContent = "..."
    }
    $("#eventsAtNine").setAttribute.textContent = evntNine;
    console.log(evntNine);
}


function hourBar() {
    let hour = moment().hours();
    currentHourBar[hour];
    console.log(currentHourBar[hour]);
    $("#twenty-two");
    console.log("#twentytwo");
}


init();

// savedEvents();

hourBar();

saveEvent[0].addEventListener("click", function(){
    console.log("Hello");
    localStorage.setItem("eventsAtNine", evntNine.textContent);
    console.log(evntNine.textContent)
})