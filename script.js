// Check to see JS is linked
console.log("linked");
// Vars to select the row according to the current time
var nine = document.querySelector("#nineHundred")
var ten = document.querySelector("#tenHundred")
var eleven = document.querySelector("#elevenHundred")
var twelve = document.querySelector("#twelveHundred")
var thirteen = document.querySelector("#thirteenHundred")
var fourteen = document.querySelector("#fourteenHundred")
var fifteen = document.querySelector("#fifteenHundred")
var sixteen = document.querySelector("#sixteenHundred")
var seveteen = document.querySelector("#seventeenHundred")

// var twentytwo = document.querySelector("#twentytwoHundred") AFTER HOURS TROUBLE SHOOTING 
// var twentythree = document.querySelector("#twentythreeHundred")
// Save button variable
var saveEvent = document.querySelectorAll(".saveBtn")

// Variables for the elements that client types text into to save their events
var evntNine = document.querySelector("#eventsAtNine")
var evntTen = document.querySelector("#eventsAtTen")
var evntEleven = document.querySelector("#eventsAtEleven")
var evntTwelve = document.querySelector("#eventsAtTwelve")
var evntOne = document.querySelector("#eventsAtOne")
var evntTwo = document.querySelector("#eventsAtTwo")
var evntThree = document.querySelector("#eventsAtThree")
var evntFour = document.querySelector("#eventsAtFour")
var evntFive = document.querySelector("#eventsAtFive")

// Array for the 24 hour clock that is used to compare the current time to the corresponding index of the array and get the apprioate element, to used after hours trouble shooting or for making new hours make sure to change the string array hour to a variable, each variable needs a correspoding querySelector variable and table row or will break the clock array. 
let currentHourBar = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seveteen, "eighteen", "nineteen", "twenty", "twenty-one", "twentytwo", "twentythree"]


//Gets the current time as a variable
var reformatDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(reformatDate);
//Places time on the page at the element specified
$("#currentDay").text(reformatDate);

// Function that on page load updates the displayed time every 1000 milliseconds or 1 second 
function init() {
    setInterval(function () {
        var reformatDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        $("#currentDay").text(reformatDate)
    }, 1000);
}

// Function that specifies what color each color the hour row is based on the current time using the currentHourBar array and the current time and assigns a class to the element in the array to change the color.
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

//Function on page load checks to see if there are any events in local storage and updates the page accordingly
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


//Calling the functions to be loaded on page load 
init();

savedEvents();

hourBar();

// Function that saves the events to local storage on button click of the save button to the corresponding row the save button is on. 
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
