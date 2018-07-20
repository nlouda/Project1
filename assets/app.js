$(document).ready(function(){

$("#library").on("click", displayMap)

function displayMap(){
    $("#button-content").clear();
    var mlink = <iframe src="https://embed.waze.com/en/iframe?zoom=12&lat=30.2672&lon=-97.7430" width="300" height="400"></iframe>
    mlink.appendTo("#content");
return false;
}
})