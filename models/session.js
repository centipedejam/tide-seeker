const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    date: Date,
    swellDirection: {
        type: String,
        enum: ['N', 'E', 'S', 'W', 'NE', 'NW', 'SE', 'SW', 'NNW', 'NNE', 'SSW', 'SSE']
    },
    size: {
        type: String,
        enum: ['Knee to Waist', 'Waist to Chest', 'Chest', 'Head', 'Double Overhead', 'Massive']
    },
    comments: String,
    img: [String],
    rating: {
        type: Number,
        match: /[1-5]/
    }
}, {
    timestamps: true 
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;