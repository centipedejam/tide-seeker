const addToFavoritesButton = document.querySelector('#addToFavorites');
const userId = addToFavoritesButton.getAttribute('userId');
const spotId = addToFavoritesButton.getAttribute('spotId');

addToFavoritesButton.addEventListener('click', (e) => {
  e.preventDefault()
  axios.post(`/users/${userId}/favorites`, { spotId })
    .then(response => {
      location.reload();
    })
    .catch(error => {
      console.log(error)
    });
});

