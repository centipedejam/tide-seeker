const addToFavoritesButton = document.querySelector('#addToFavorites');
const userId = addToFavoritesButton.getAttribute('userId');
const spotId = addToFavoritesButton.getAttribute('spotId');

addToFavoritesButton.addEventListener('click', (e) => {
  e.preventDefault();
  addToFavoritesButton.style.visibility = 'hidden';
  axios.post(`/users/${userId}/favorites`, { spotId })
    .then(response => {
      alert('you liked this page!')
    })
    .catch(error => {
      console.log(err)
    });
});