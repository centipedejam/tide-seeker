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
    res.render('users/favorites', { title: 'My Spots' });
}

async function create (req, res) {
    const user = await User.findById(req.params.id);
    const spot = await Spot.findById(req.body.spotId);
    user.favoriteSpots.push(spot);
    try {
        await user.save();
    } catch (err) {
        console.log(err);
    }

}