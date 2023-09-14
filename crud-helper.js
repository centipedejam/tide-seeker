require('dotenv').config();
require('./config/database');
const Spot = require('./models/spot');

let spots = await Spot.find({});

console.log(spots);