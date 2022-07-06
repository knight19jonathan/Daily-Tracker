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
    var eventThatNine = localStorage.getItem("eventsAtNine")
    if (eventThatNine == null) {
        document.querySelector("#eventsAtNine").textContent = "..."
    }
    evntNine.textContent = eventThatNine;
}


function hourBar() {
    let hour = moment().hours();
    currentHourBar[hour];
    console.log(currentHourBar[hour]);
    $("#twenty-two");
    console.log("#twentytwo");
}


init();

savedEvents();

hourBar();

saveEvent[0].addEventListener("click", function(){
    localStorage.setItem("eventsAtNine", evntNine.textContent);  
});

saveEvent[1].addEventListener("click", function(){
    localStorage.setItem("eventsAtTen", evntTen.textContent);
});
saveEvent[2].addEventListener("click", function(){
    localStorage.setItem("eventsAtEleven", evntEleven.textContent);
});
saveEvent[3].addEventListener("click", function(){
    localStorage.setItem("eventsAtTwelve", evntTwelve.textContent);
});
saveEvent[4].addEventListener("click", function(){
    localStorage.setItem("eventsAtOne", evntOne.textContent);
});
saveEvent[5].addEventListener("click", function(){
    localStorage.setItem("eventsAtTwo", evntTwo.textContent);
});
saveEvent[6].addEventListener("click", function(){
    localStorage.setItem("eventsAtThree", evntThree.textContent);
});
saveEvent[7].addEventListener("click", function(){
    localStorage.setItem("eventsAtFour", evntFour.textContent);
}); 
saveEvent[8].addEventListener("click", function(){
    localStorage.setItem("eventsAtFive", evntFive.textContent);
    console.log(evntFive.textContent)
});  
