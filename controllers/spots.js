const Spot = require('../models/spot');

module.exports = {
    index,
    new: newSpot,
    show,
    create,
    getAllSpots
}

async function index(req, res) {
    const spots = await Spot.find({});
    res.render('spots/index', { title: 'All Surf Spots', spots });
};

function newSpot(req, res) {
    res.render('spots/new', { title: 'Add a Surf Spot' });
}

async function show(req, res) {
    const spot = await Spot.findById(req.params.id);
    res.render('spots/show', { title: spot.name, spot });
}

async function create(req, res) {
    try {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        const spot = await Spot.create(req.body);
        res.redirect(`/spots/${spot._id}`);
    } catch (err) {
        console.log(err);
        res.render('spots/new', { errMsg: err.message, title: 'Validation Error, Try Again!' });
    }
}

async function getAllSpots(req, res) {
    try {
        const spots = await Spot.find({});
        res.json(spots);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};