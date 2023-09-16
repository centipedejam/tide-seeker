const Spot = require('../models/spot');
const User = require('../models/user');

module.exports = {
    showSessions
}


async function showSessions (req, res) { 
    const unformatedSessions = await Spot.find({ 'sessions.user': req.params.id }, 'sessions');
    const sessions = unformatedSessions.flatMap(spot => spot.sessions);
    console.log(sessions);
    res.render('users/sessions', { title: 'My Sessions', sessions});
}