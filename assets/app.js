$(document).ready(function(){

$("#library").on("click", displayMap)

function displayMap(){
<<<<<<< HEAD
    $('<iframe src="https://embed.waze.com/en/iframe?zoom=12&lat=30.2672&lon=-97.7430&pin=1" width="300" height="400"></iframe>').appendTo(".content");
    $('iframe').contents().find(".content").html();
}
})
      
=======
    $("#button-content").clear();
    var mlink = <iframe src="https://embed.waze.com/en/iframe?zoom=12&lat=30.2672&lon=-97.7430" width="300" height="400"></iframe>
    mlink.appendTo("#content");
return false;
}
})
>>>>>>> 558019ddb4699d9fb3e5c1c2cabf51b1d3254150
