const Spot = require('../models/spot');
const User = require('../models/user');

module.exports = {
    showSessions,
    showFavorites,
    create,
}


async function showSessions (req, res) { 
    const spotsWithSession = await Spot.find({ 'sessions.user': req.params.id }, 'sessions');
    console.log(spotsWithSession);
    const sessions = spotsWithSession.flatMap(spot => spot.sessions);
    console.log(sessions);
    res.render('users/sessions', { title: 'My Sessions', sessions});
}

async function showFavorites (req, res) {
    const user = await User.findById(req.params.id).populate('favoriteSpots');
    const spots = user.favoriteSpots

    res.render('users/favorites', { title: 'My Spots', spots });
}

async function create (req, res) {
    const user = await User.findById(req.params.id);
    const spot = await Spot.findById(req.body.spotId);
    if (user.favoriteSpots.includes(spot._id)) {
        console.log('ALREADY A FAVORITE');
    } else {
        user.favoriteSpots.push(spot);
    }
    try {
        await user.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/spots/${spot._id}`)
}