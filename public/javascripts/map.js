var map = L.map('map').setView([32.83, -117.27], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

fetch('/api/surfspots')
    .then(response => response.json())
    .then(surfSpotData => {
        surfSpotData.forEach(spot => {
            const latitude = parseFloat(spot.lat);
            console.log(latitude)
            const longitude = parseFloat(spot.long);
            console.log(longitude)
            const marker = L.marker([latitude, longitude]).addTo(map);

            marker.bindPopup(`<a href="#">${spot.name}</a> <br><img class="marker-img" src="${spot.img}">`);
        });
    })
    .catch(error => console.error(error));
