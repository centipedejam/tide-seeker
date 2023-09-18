const mongoose = require('mongoose');
const Spot = require('../models/spot');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    googleId: {
        type: String,
        required: true
    },
    favoriteSpots: [{
        type: Schema.Types.ObjectId,
        ref: 'Spot'
    }],
    email: String,
    avatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);