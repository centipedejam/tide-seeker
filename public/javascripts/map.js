var map = L.map('map').setView([32.83, -117.27], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([32.83, -117.27]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

// fetch('/api/surfspots')
//     .then(response => response.json())
//     .then(surfSpotData => {
//         surfSpotData.forEach(spot => {
//             const latitude = parseFloat(spot.location[0]);
//             console.log(latitude)// Convert to number
//             const longitude = parseFloat(-spot.location[1]);
//             console.log(longitude)// Convert to number
//             const marker = L.marker([latitude, longitude]).addTo(map);

//             marker.bindPopup(`<a href="#">${spot.name}</a> <br><img class="marker-img" src="${spot.img}">`);
//         });
//     })
//     .catch(error => console.error(error));
