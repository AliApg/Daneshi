document.getElementById('map-pin').addEventListener('click', function () {
    // Define the coordinates
    var latitude = 23.6255930;
    var longitude = 58.1959720;

    // Construct the Google Maps URL with the coordinates as parameters
    var mapsUrl = 'https://maps.google.com/maps?q=' + latitude + ',' + longitude;

    // Open the Google Maps URL in a new tab or window
    window.open(mapsUrl, '_blank');
});

