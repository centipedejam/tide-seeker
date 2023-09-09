const Session = require('../models/session');

module.exports = {
    index,
}

async function index (req, res) {
    const sessions = await Session.find({});
    res.render('sessions/index', {title: 'Sessions', sessions})
}