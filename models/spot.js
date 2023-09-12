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
    comments: String,
    img: [String],
    rating: {
        type: String,
        enum: [1, 2, 3, 4, 5]
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    description: String
}, {
    timestamps: true
});


const spotSchema = new Schema({
    city: String,
    lat: {
        type: Number,
        min: -90,
        max: 90
    },
    long: {
        type: Number,
        min: -180,
        max: 180
    },
    ability: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Pro', 'All Ability Levels']
    },
    description: String,
    sessions: [sessionSchema],
    name: String,
    bottomType: {
        type: String,
        enum: ['Sand', 'Rocky Reef', 'Coral', 'Jetty']
    },
    img: String
})

const Spot = mongoose.model('Spot', spotSchema);

module.exports = Spot;