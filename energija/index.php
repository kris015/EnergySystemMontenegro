<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mapa Lokacija</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 align="center">Energetski sistemi</h1>
    <form id="locationForm">
    <label for="city">Ime Drzave:</label>
    <input type="text" placeholder="Montenegro" id="city" name="city" value="Montenegro" required>      


        <button type="button" onclick="submitForm()">Pošalji</button>
    </form>

    <div id="map"></div>

    <div id="locationInfo">
       
        <p id="locationDetails"></p>
    </div>


    <div id="cityInfo">
        <img id="cityImage" alt="">
        <p id="cityMessage"></p>
    </div>


    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2a9HeI1BsSp7CgkQL10lMwmCjqenu7rs&callback=initMap" async defer></script>
    <script src="frontend.js"></script>
</body>
</html>



