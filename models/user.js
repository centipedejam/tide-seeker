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
    windDirection: {
        type: String,
        enum: ['N', 'E', 'S', 'W', 'NE', 'NW', 'SE', 'SW', 'NNW', 'NNE', 'SSW', 'SSE']
    },
    windStrength: {
        type: String,
        enum: ['Calm', '5-10kt', '10-15kt', '15-20kt', '20-30kt', 'Victory at Sea']
    },
    img: [String],
    rating: {
        type: String,
        enum: [1, 2, 3, 4, 5]
    },
    description: String
}, {
    timestamps: true
});

const userSchema = new Schema({
    name: String,
    googleId: {
        type: String,
        required: true
    },
    sessions: [sessionSchema],
    email: String,
    avatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);