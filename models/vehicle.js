const { Schema, model } = require('mongoose');

const vehicleSchema = Schema({
    name: {
        type: String
    },
    model: {
        type: String
    },
    manufacturer: {
        type: String
    },
    class: {
        type: String
    },
    cost: {
        type: String
    },
    speed: {
        type: String
    },
    length: {
        type: String
    },
    cargo_capacity: {
        type: String
    },
    mimimum_crew: {
        type: Number
    },
    passengers: {
        type: Number
    },
    related_pilots: {
        type: []
    },
    related_films: {
        type: []
    },
    photo: {
        type: String
    }
});

vehicleSchema.methods.toJSON = function() {
    const { __validator, ...data } = this.toObject();
    return data;
}
module.exports = model('vehicle', vehicleSchema);