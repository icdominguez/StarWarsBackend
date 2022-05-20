const { Schema, model } = require('mongoose');

const starshipSchema = Schema({
    name: {
        type: String
    },
    model: {
        type: String
    },
    manufacturer: {
        type: String
    },
    cost_in_credits: {
        type: String
    },
    length: {
        type: String
    },
    max_atmosphering_speed: {
        type: String
    },
    crew: {
        type: String
    },
    passengers: {
        type: String
    },
    cargo_capacity: {
        type: String
    },
    consumables: {
        type: String
    },
    hyperdrive_rating: {
        type: String
    },
    MGLT: {
        type: String
    },
    starship_class: {
        type: String
    },
    pilots: {
        type: []
    },
    films: {
        type: []
    },
    photo: {
        type: String
    }
});

starshipSchema.methods.toJSON = function() {
    const { __validator, ...data } = this.toObject();
    return data;
}
module.exports = model('starship', starshipSchema);