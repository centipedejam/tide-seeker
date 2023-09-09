require('dotenv').config();
// Connect to the database
require('./config/database');
const Session = require('./models/session');

let sessions = await Session.find({});
console.log(sessions)