$(document).ready(function(){

$("#library").on("click", displayMap)

function displayMap(){
    $('<iframe src="https://embed.waze.com/en/iframe?zoom=12&lat=30.2672&lon=-97.7430&pin=1" width="300" height="400"></iframe>').appendTo(".content");
    $('iframe').contents().find(".content").html();
}
})
      