$(document).ready(function () {
    $("#library").on("click", function(){
        initMap('library');
    })
    $("#restaurant").on("click", function(){
        initMap('restaurant');
    })
    $("#coffee-shop").on("click", function(){
        initMap('coffee-shop');
    })
   

    var libraryMarker = [{
            coords: {
                lat: 30.2659,
                lng: -97.8218
            },
            content: 'Austin Public Library'
        },
        {
            coords: {
                lat: 30.4424,
                lng: -97.6292
            },
            content: 'Pfluggerville Library'
        },
        {
            coords: {
                lat: 30.4337,
                lng: -97.7731
            },
            content: 'Spicewood Springs Branch Library'
        },
        {
            coords: {
                lat: 30.3233,
                lng: -97.8108
            },
            content: 'Yarborough Branch Library'
        },
        {
            coords: {
                lat: 30.1922,
                lng: -97.8472
            },
            content: 'Pleasant Hill Branch Library'
        }
    ];
    var RestaurantMarker = [{
            coords: {
                lat: 30.3951,
                lng: -97.8475
            },
            content: 'Black Walnut Cafe'
        },
        {
            coords: {
                lat: 30.2605,
                lng: -97.7337
            },
            content: 'Cenote'
        },
        {
            coords: {
                lat: 30.3323,
                lng: -97.7351
            },
            content: 'Brentwood Social House'
        },
        {
            coords: {
                lat: 30.2955,
                lng: -97.7418
            },
            content: 'Spider House'
        },
        {
            coords: {
                lat: 30.3922,
                lng: -97.7324
            },
            content: 'BJs Restaurant & Brewhouse'
        }
    ];
    var coffeeShopMarker = [{
            coords: {
                lat: 30.2954,
                lng: -97.7842
            },
            content: 'Mozarts Coffee Roaster'
        },
        {
            coords: {
                lat: 30.2935,
                lng: -97.9760
            },
            content: 'Cherrywood Coffeehouse'
        },
        {
            coords: {
                lat: 30.1373,
                lng: -97.7966
            },
            content: 'Opera Cafe & Coffee House'
        },
        {
            coords: {
                lat: 30.2669,
                lng: -97.7200
            },
            content: 'Figure 8 Coffee Purveyors'
        },
        {
            coords: {
                lat: 30.4780,
                lng: -97.7663
            },
            content: 'Cuppa Austin'
        }
    ];
    var markersObject = {
        library: libraryMarker,
        "coffee-shop": coffeeShopMarker,
        restaurant: RestaurantMarker
    };
    var map;

    function initMap(maptype) {
        var options = {
            zoom: 10,
            center: {
                lat: 30.2867,
                lng: -97.7297
            }
        }
        var map = new google.maps.Map(document.getElementById('map'), options);


        for (var i = 0; i < markersObject[maptype].length; i++) {

            addMarker(markersObject[maptype][i]);
        }

        function addMarker(props) {
            var marker = new google.maps.Marker({
                position: props.coords,
                map: map,
            });

            if (props.content) {
                var infoWindow = new google.maps.InfoWindow({
                    content: props.content
                });

                marker.addListener('mouseover', function () {
                    infoWindow.open(map, marker);
                });
                // NOT WORKING!!
                marker.addListener('mouseout',function(){
                    infoWindow.close(map, marker);
                    // setTimeout(infoWindow.close, 4000, map, marker);
                    console.log("mouseleave has occurred");
                });

            }
        }
    }


})