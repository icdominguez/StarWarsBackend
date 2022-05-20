const { Schema, model } = require('mongoose');

const specieSchema = Schema({
    name: {
        type: String
    },
    classification: {
        type: String
    },
    languague: {
        type: String
    },
    avg_lifespan: {
        type: String
    },
    avg_height: {
        type: String
    },
    'hair_color(s)': {
        type: []
    },
    'skin_color(s)': {
        type: []
    },
    'eye_color(s)': {
        type: []
    },
    photo: {
        type: String
    }
});

specieSchema.methods.toJSON = function() {
    const { __validator, ...data } = this.toObject();
    return data;
}

module.exports = model('specie', specieSchema);