console.log("linked")

var reformatDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(reformatDate);


function init() {
    setInterval(function(){ 
        var reformatDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        $("#currentDay").text(reformatDate) 
    }, 1000);
}


init();
