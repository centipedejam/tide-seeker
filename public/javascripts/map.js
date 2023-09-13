var map = L.map('map').setView([36.83, -120.27], 5.5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

fetch('/api/surfspots')
    .then(response => response.json())
    .then(surfSpotData => {
        surfSpotData.forEach(spot => {
            const latitude = parseFloat(spot.lat);
            const longitude = parseFloat(spot.long);
            const marker = L.marker([latitude, longitude]).addTo(map);
            marker.bindPopup(`<a href="/spots/${spot._id}">${spot.name}</a> <br><img class="marker-img" src="${spot.img}">`);
        });
    })
    .catch(error => console.error(error));
