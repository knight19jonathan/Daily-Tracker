console.log("linked");
var nine = document.querySelector("#nineHundred")
var ten = document.querySelector("#tenHundred")
var eleven = document.querySelector("#elevenHundred")
var twelve = document.querySelector("#twelveHundred")
var thirteen = document.querySelector("#thirteenHundred")
var fourteen = document.querySelector("#fourteenHundred")
var fifteen = document.querySelector("#fifteenHundred")
var sixteen = document.querySelector("#sixteenHundred")
var seveteen = document.querySelector("#seventeenHundred")
var twentytwo = document.querySelector("#twentytwoHundred")
var twentythree = document.querySelector("#twentythreeHundred")

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





let currentHourBar = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seveteen, "eighteen", "nineteen", "twenty", "twenty-one", twentytwo, twentythree]

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

function hourBar() {
    
    let hour = moment().hours();
    currentHourBar[hour];
    console.log(currentHourBar[hour]);
    let b = currentHourBar.indexOf(currentHourBar[hour]);
    console.log(b);
    for (let i = 0; i < currentHourBar.length; i++) {
        if (i < b) {
            $(currentHourBar[i]).addClass("past");
        } else if (i > b) {
            $(currentHourBar[i]).addClass("future");
        } else {
            $(currentHourBar[i]).addClass("present");
        }
    }

}


function savedEvents() {
    var eventThatNine = localStorage.getItem("eventsAtNine")
    if (eventThatNine == null) {
        document.querySelector("#eventsAtNine").textContent = "..."
    }
    evntNine.textContent = eventThatNine;

    var eventThatTen = localStorage.getItem("eventsAtTen")
    if (eventThatTen == null) {
        document.querySelector("#eventsAtTen").textContent = "..."
    }
    evntTen.textContent = eventThatTen;

    var eventThatEleven = localStorage.getItem("eventsAtEleven")
    if (eventThatEleven == null) {
        document.querySelector("#eventsAtEleven").textContent = "..."
    }
    evntEleven.textContent = eventThatEleven;

    var eventThatTwelve = localStorage.getItem("eventsAtTwelve")
    if (eventThatTwelve == null) {
        document.querySelector("#eventsAtTwelve").textContent = "..."
    }
    evntTwelve.textContent = eventThatTwelve;

    var eventThatOne = localStorage.getItem("eventsAtOne")
    if (eventThatOne == null) {
        document.querySelector("#eventsAtOne").textContent = "..."
    }
    evntOne.textContent = eventThatOne;

    var eventThatTwo = localStorage.getItem("eventsAtTwo")
    if (eventThatTwo == null) {
        document.querySelector("#eventsAtTwo").textContent = "..."
    }
    evntTwo.textContent = eventThatTwo;

    var eventThatThree = localStorage.getItem("eventsAtThree")
    if (eventThatThree == null) {
        document.querySelector("#eventsAtThree").textContent = "..."
    }
    evntThree.textContent = eventThatThree;

    var eventThatFour = localStorage.getItem("eventsAtFour")
    if (eventThatFour == null) {
        document.querySelector("#eventsAtFour").textContent = "..."
    }
    evntFour.textContent = eventThatFour;

    var eventThatFive = localStorage.getItem("eventsAtFive")
    if (eventThatFive == null) {
        document.querySelector("#eventsAtFive").textContent = "..."
    }
    evntFive.textContent = eventThatFive;

}





init();

savedEvents();


hourBar();

saveEvent[0].addEventListener("click", function () {
    localStorage.setItem("eventsAtNine", evntNine.textContent);
    console.log(evntNine.textContent)
});

saveEvent[1].addEventListener("click", function () {
    localStorage.setItem("eventsAtTen", evntTen.textContent);
});

saveEvent[2].addEventListener("click", function () {
    localStorage.setItem("eventsAtEleven", evntEleven.textContent);
});

saveEvent[3].addEventListener("click", function () {
    localStorage.setItem("eventsAtTwelve", evntTwelve.textContent);
});

saveEvent[4].addEventListener("click", function () {
    localStorage.setItem("eventsAtOne", evntOne.textContent);
});

saveEvent[5].addEventListener("click", function () {
    localStorage.setItem("eventsAtTwo", evntTwo.textContent);
});

saveEvent[6].addEventListener("click", function () {
    localStorage.setItem("eventsAtThree", evntThree.textContent);
});

saveEvent[7].addEventListener("click", function () {
    localStorage.setItem("eventsAtFour", evntFour.textContent);
});

saveEvent[8].addEventListener("click", function () {
    localStorage.setItem("eventsAtFive", evntFive.textContent);
    console.log(evntFive.textContent)
});  
