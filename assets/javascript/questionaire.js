$(document).ready(function () {

    // setTimeout(function () {

    // });

    // hiding the HTML content
    $(".hideallofit").hide();
    // when start button is pressed, the 1st question appears
    $("#start").on("click", function () {
        $("#start, #startuppage").hide();
        $("#question1").show();
        event.preventDefault();
        // $("submitbutton1").click()



    });

    //tried something like this but not working for some reason
    // document.getElementById("form1").onsubmit = function () {
    //     var option = document.querySelector('input[name = "q1"]:checked').value;

    //     document.getElementById("#desiredLoc").innerHTML = option;
    //     $("#desiredLoc").text(option);
    //     console.log(option);


    //     return false; // required to not refresh the page
    // }

    // when Submit button is pressed, the 2nd question appears


    $("#submitbutton1").on("click", function () {
        $(".hideallofit").hide();
        $("#question2").show();
        event.preventDefault();

    });

    // when Submit button is pressed, the 2nd question appears

    $("#submitbutton2").on("click", function () {
        $(".hideallofit").hide();
        $("#question3").show();
        event.preventDefault();

    });

    // $("#submitbutton3").on("click", function () {
    //     $(".hideallofit").hide();
    //     $("#desiredLoc").show();
    //     event.preventDefault();

    // });
    ////////////////////////////////////////////////////////////

    // $("#submitbutton3").on("click", function () {
    //     var userScoreTotal = $("#totalNumberScore").val();
    //     console.log(" is the total score" + userScoreTotal);

    //     switch (userScoreTotal) {



    //         case 3:
    //         case 4:
    //         case 5:
    //             return
    //             $(".hideallofit").hide();
    //             $("#showLibrary").show();
    //             event.preventDefault();
    //             console.log("3 4 5 ");



    //         case 6:
    //         case 7:
    //             return
    //             $(".hideallofit").hide();
    //             $("#showCafe").show();
    //             event.preventDefault();
    //             console.log("6 7 ");


    //         case 8:
    //         case 9:
    //             return
    //             $(".hideallofit").hide();
    //             $("#showPub").show();
    //             event.preventDefault();
    //             console.log("8 9  ");

    //     };

    // });


    // var userScoreTotal = $("#totalNumberScore").val();

    // var library = function () {

    //     $(".hideallofit").hide();
    //     $("#showLibrary").show();
    //     event.preventDefault();

    // };

    // var cafe = function () {
    //     event.preventDefault();
    //     $(".hideallofit").hide();
    //     $("#showCafe").show();

    // };

    // var pub = function () {
    //     event.preventDefault();
    //     $(".hideallofit").hide();
    //     $("#showPub").show();

    // };


    // if (userScoreTotal === 5) {
    //     library();
    // }




    /////////////////////////////////////////////////
    /////////////////


    $("#submitbutton3").on("click", function () {
        var userScoreTotal = $("#totalNumberScore").val();

        var library = function () {

            $(".hideallofit").hide();
            $("#showLibrary").show();
            $("#map").show();
            event.preventDefault();

        };

        var cafe = function () {
            event.preventDefault();
            $(".hideallofit").hide();
            $("#showCafe").show();
            $("#map").show();

        };

        var pub = function () {
            event.preventDefault();
            $(".hideallofit").hide();
            $("#showPub").show();
            $("#map").show();

        };
        //terneray operator
        userScoreTotal <= 5 ? library() : null;
        userScoreTotal >= 6 ? cafe() : null;
        userScoreTotal >= 8 ? pub() : null;

    });

    //     // $(".hideallofit").hide();
    //     // $("#desiredLoc").show();
    //     // event.preventDefault();
    //     // });


    //     var userScoreTotal = $("#totalNumberScore").val();



    //     if (userScoreTotal <= 5) {
    //         $(".hideallofit").hide();
    //         $("#showLibrary").show();
    //         event.preventDefault();
    //         console.log(userScoreTotal + "library");

    //     } else if (userScoreTotal === 6 || userScoreTotal === 7) {
    //         $(".hideallofit").hide();
    //         $("#showCafe").show();
    //         event.preventDefault();
    //         console.log("6 7cafe ");

    //     } else if (userScoreTotal >= 8) {
    //         $(".hideallofit").hide();
    //         $("#showPub").show();
    //         event.preventDefault();
    //         console.log(userScoreTotal + "bar ");
    //     };
    // }


    //////////////////


    function calcscore() {
        var score = 0;
        $(".calc:checked").each(function () {
            // console.log(score);
            score += parseInt($(this).val(), 10);
            console.log(score);


        });
        $("input[name=sum]").val(score)
    }
    $().ready(function () {
        $(".calc").change(function () {
            calcscore()
        });
    });




});