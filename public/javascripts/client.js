const addToFavoritesButton = document.querySelector('#addToFavorites');
const userId = addToFavoritesButton.getAttribute('userId');
const spotId = addToFavoritesButton.getAttribute('spotId');

addToFavoritesButton.addEventListener('click', (e) => {
  // addToFavoritesButton.innerText = 'Liked';
  axios.post(`/users/${userId}/favorites`, { spotId })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    });
});

