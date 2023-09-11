require('dotenv').config();
// Connect to the database
require('./config/database');
const Spot = require('./models/spot');

let spots = await Spot.find({});
console.log(spots);