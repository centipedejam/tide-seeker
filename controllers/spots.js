const Spot = require('../models/spot');

module.exports = {
    index,
    new: newSpot,
}

async function index (req, res) {
    const spots = await Spot.find({});
    res.render('spots/index', {title: 'Index Functionality', spots})
};

function newSpot (req, res) {
    res.render('spots/new', {title: 'Add Surf Spot'})
}