const Session = require('../models/session');
const Spot = require('../models/spot');

module.exports = {
    index,
    show,
    create,
    new: newSession
}

async function index (req, res) {
    const sessions = await Session.find({});
    res.render('sessions/index', {title: 'Sessions', sessions})
}

async function show(req, res) {
    try {
        const session = await Session.findById(req.params.id);
        const spot = await Spot.findOne({ sessions: req.params.id }).populate('sessions');
        console.log(spot);
        res.render('sessions/show', { session, title: 'Show Session', spot });
    } catch (error) {
        // Handle any errors that may occur during the database queries or rendering.
        console.error(error);
    }
}

async function create(req, res) {
    const session = await Session.create(req.body);
    const spot = await Spot.findById(req.params.id);
    spot.sessions.push(session._id);
}

async function newSession (req, res) {
    const spot = await Spot.findById(req.params.id)
    console.log(spot)
    res.render('sessions/new', {title: 'New Session', spot})
}