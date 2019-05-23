$(document).ready(function () {
    $(document).on("click", ".button", function () {
        $('#results').empty();
        var stop = $(this).attr('id');
        console.log(stop);
        var key = "LAVwTT2AWFcz8ZGsJKNngyY4f";
        var CORS = "https://cors-anywhere.herokuapp.com/"
        var queryURL = CORS + "http://ctabustracker.com/bustime/api/v2/getpredictions?key=" + key + "&stpid=" + stop + "&format=json";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            results(response);
        }).fail(function () {
            $('#results').append('<p>' + 'No reults found!' + '</p>');
        });
    });
});

function results(response) {
    console.log(response);
    // //if (response['bustime-response'].error[0].msg == "No service scheduled" && response['bustime-response'].error[0].msg == "No arrival times") {
    // if (response['bustime-response'] != response['bustime-response'].error) {
    //     $('#results').append('<p>' + 'No reults found!' + '</p>');
    // } else {
        var comingBuses = response['bustime-response'].prd.length;
        console.log('There are ' + comingBuses + ' upcoming buses! They are:')
        for (var i = 0; i < comingBuses; i++) {
            console.log("Bus " + response['bustime-response'].prd[i].rt + " will arrive in " + response['bustime-response'].prd[i].prdctdn + " minutes");
            var result = "Bus " + response['bustime-response'].prd[i].rt + " will arrive in " + response['bustime-response'].prd[i].prdctdn + " minutes";
            $('#results').append('<p>' + result + '</p>');
            //console.log('Concert ' + (i + 1) + ' is on ' + moment(response.data[i].datetime).format('MMMM Do YYYY') + ' at the ' + response.data[i].venue.name + ' in ' + response.data[i].venue.city + ', ' + response.data[i].venue.country);
        }
    // }
}

//67,67,"Jackson & Canal","Jackson & Canal, Eastbound, Southwest Corner",41.877997,-87.639776,0,,1
//1417,1417,"LaSalle & Oak","LaSalle & Oak, Southbound, Southwest Corner",41.900327,-87.632942,0,,1
//1127,1127,"Michigan & Chestnut","Michigan & Chestnut, Northbound, Southeast Corner",41.898069,-87.62396,0,,1

//try this 24 bus:
//14161,14161,"Navy Pier Terminal","Navy Pier Terminal, Northbound, Bus Terminal",41.89232851,-87.6101389,0,,1