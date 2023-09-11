const Spot = require('../models/spot');

module.exports = {
    index,
    show,
    create,
    new: newSession,
    edit
}

async function index(req, res) {
    const spot = await Spot.findById(req.params.id);
    const sessions = spot.sessions
    console.log
    res.render('sessions/index', { title: 'Sessions', sessions })
}

async function show(req, res) {
    try {
        const spot = await Spot.findOne({ 'sessions._id': req.params.id });
        const session = spot.sessions.find(session => session._id == req.params.id);
        res.render('sessions/show', { session, title: 'Show Session' });
    } catch (error) {
        // Handle any errors that may occur during the database query or rendering.
        console.error(error);
        res.status(500).send('Internal Server Error'); // You can customize the error handling as needed.
    }
}


async function create(req, res) {
    const spot = await Spot.findById(req.params.id);
    spot.sessions.push(req.body);
    try {
        await spot.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/spots/${spot._id}`);
}

async function newSession(req, res) {
    const spot = await Spot.findById(req.params.id)
    console.log(spot)
    res.render('sessions/new', { title: 'New Session', spot })
}

async function edit( req, res) {
    const spot = await Spot.findOne({ 'sessions._id': req.params.id });
    const session = spot.sessions.find(session => session._id == req.params.id);
    const validWindStrengths = Spot.schema.path('sessions.windStrength').enumValues;
    const validSwellDirections = Spot.schema.path('sessions.swellDirection').enumValues;
    const validSizes = Spot.schema.path('sessions.size').enumValues;
    const validWindDirections = Spot.schema.path('sessions.windDirection').enumValues;
    const validRatings = Spot.schema.path('sessions.rating').enumValues;
    console.log(validRatings)
    
    res.render('sessions/edit', {title: 'Edit Session', session, validWindStrengths, validSwellDirections, validSizes, validWindDirections, validRatings});
}