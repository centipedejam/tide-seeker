const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const spotSchema = new Schema({
    location: String,
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
        enum: ['Beginner', 'Intermediate', 'Pro', 'Advanced']
    },
    description: String,
    sessions: [{
        type: Schema.Types.ObjectId,
        ref: 'Session'
}]
})

const Spot = mongoose.model('Spot', spotSchema);

module.exports = Spot;