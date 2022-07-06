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


let currentHourBar = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seveteen, "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three"] 

var reformatDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(reformatDate);

$("#currentDay").text(reformatDate);

$( ".eventSet" ).dialog({
    modal: true
  });

// Getter
var modal = $( ".eventSet" ).dialog( "option", "modal" );
 
// Setter
$( ".eventSet" ).dialog( "option", "modal", true );


var a = moment().hours();
  
console.log(a); 

function init() {
    setInterval(function(){ 
        var reformatDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        $("#currentDay").text(reformatDate) 
    }, 1000);
}

init();



function hourBar() {
    let hour = moment().hours();
    currentHourBar[hour];
    console.log(currentHourBar[hour]);
    $("#twenty-two");
    console.log("#twentytwo");
}



hourBar();
