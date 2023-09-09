const Spot = require('../models/spot');

module.exports = {
    index
}

async function index (req, res) {
    const spots = await Spot.find({});
    res.render('spots/index', {title: 'Index Functionality', spots})
};