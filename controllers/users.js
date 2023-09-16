const Spot = require('../models/spot');
const User = require('../models/user');

module.exports = {
    showSessions
}


async function showSessions (req, res) { 
    const sessions = req.user.sessions;
    console.log(sessions);
    res.render('users/sessions', { title: 'My Sessions', sessions });
}