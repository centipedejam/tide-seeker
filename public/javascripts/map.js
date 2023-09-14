var map = L.map('map').setView([36.83, -120.27], 5.5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

fetch('/api/surfspots')
    .then(response => response.json())
    .then(surfSpotData => {
        surfSpotData.forEach(spot => {
            const marker = L.marker([spot.lat, spot.long]).addTo(map);
            marker.bindPopup(`<a href="/spots/${spot._id}">${spot.name} | ${spot.city}</a> <br><img class="marker-img" src="${spot.img}">`);
        });
    })
    .catch(error => console.error(error));
