var map;
var montenegroMarker;
var additionalMarker;
var thirdMarker;

function initMap() {
    var initialLocation = { lat: 42.708678, lng: 19.374390 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: initialLocation,
        zoom: 8
    });
}

function submitForm() {
    var city = document.getElementById('city').value;

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': city }, function (results, status) {
        console.log('Geocode Status:', status);
        if (status == 'OK') {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();

            console.log('Latitude:', latitude);
            console.log('Longitude:', longitude);

            var cityInfo = document.getElementById('cityInfo');
            var cityImage = document.getElementById('cityImage');
            var cityMessage = document.getElementById('cityMessage');

            if (city.toLowerCase() === 'montenegro') {
                var montenegroCoordinates = { lat: 41.983259070966234, lng: 19.194687676716825 };

                // Postavi marker za Montenegro sa specifičnim koordinatama
                montenegroMarker = new google.maps.Marker({
                    position: montenegroCoordinates,
                    map: map,
                    title: 'Montenegro'
                });


                montenegroMarker.addListener('click', function () {
                    showInfoWindow(montenegroMarker, 'Wind Farm Mozura', '<a href="windfarmmozura.html">Sadržaj informacija o WindFarm.</a>');
                });

                // Dodaj drugi marker sa specifičnim koordinatama
                var additionalCoordinates = { lat: 42.32576138059927, lng: 18.7821265 };
                additionalMarker = new google.maps.Marker({
                    position: additionalCoordinates,
                    map: map,
                    title: 'Dodatni Marker'
                });

                additionalMarker.addListener('click', function () {
                    showInfoWindow(additionalMarker, 'Zeus Energy DOO', '<a href="zeusenergy.html"> Sadržaj informacija o Zeus Energy DOO.</a>');
                });

                // Dodaj treci marker sa specifičnim koordinatama
                var thirdCoordinates = { lat: 42.8843793318825, lng: 19.09498043809029 };
                thirdMarker = new google.maps.Marker({
                    position: thirdCoordinates,
                    map: map,
                    title: 'Treci Marker'
                });

                thirdMarker.addListener('click', function () {
                    showInfoWindow(thirdMarker, 'Informacije o Krnovo Wind Farm', '<a href="krnovovind.html"> Sadržaj informacija o Krnovo Wind Farm.</a>');
                });
            } else {
                cityInfo.style.display = 'none';
            }
        } else {
            alert('Geokodiranje nije uspelo: ' + status);
        }
    });
}

function showInfoWindow(marker, title, content) {
    var infoWindow = new google.maps.InfoWindow({
        content: '<div><strong>' + title + '</strong><br>' + content + '</div>'
    });

    infoWindow.open(map, marker);
}


