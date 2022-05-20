const { Schema, model } = require('mongoose');

const planetSchema = Schema({
    name: {
        type: String
    },
    rotation_period: {
        type: String
    },
    orbital_period: {
        type: String
    },
    diameter: {
        type: String
    },
    climate: {
        type: String
    },
    gravity: {
        type: String
    },
    terrain: {
        type: String
    },
    surface_water: {
        type: String
    },
    population: {
        type: String
    },
    residents: {
        type: []
    },
    related_films: {
        type: []
    },
    photo: {
        type: String
    }
});

planetSchema.methods.toJSON = function() {
    const { __validator, ...data } = this.toObject();
    return data;
}

module.exports = model('planet', planetSchema);
