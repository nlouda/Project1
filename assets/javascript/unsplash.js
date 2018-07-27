$.getJSON('https://api.unsplash.com/photos/random/?query=study&client_id=bf138c21584a4d324b2d09f47061e3fb29e82ad93b7cd518a6a56d9d0978b167', function (data) {
    console.log(data);
    return data;

    // each(data, function (index, value) {
    //     console.log("value", value);
    //     console.log(value.urls);

    //     var imageURL = value.urls.full;
    //     console.log(imageURL);
    //     $('.image img').attr('src', 'imageURL');

    // });
}).then(function(data){
    console.log("then", data)
    var imageURL = data.urls.full;
        console.log(imageURL);
        $('.image img').attr('src', imageURL);
})