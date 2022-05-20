const { Schema, model } = require('mongoose');

const characterSchema = Schema({
    name : {
        type: String
    },
    birth_year : {
        type: String
    },
    species : {
        type: String
    },
    height : {
        type: String
    },
    mass : {
        type: String
    },
    gender: {
        type: String
    },
    hair_color: {
        type: String
    },
    skin_color: {
        type: String
    },
    homeworld: {
        type: String
    },
    photo: {
        type: String
    },
    related_films: {
        type: Array
    },
    related_vehicles: {
        type: Array
    },
    related_starships: {
        type: Array
    }
});

characterSchema.methods.toJSON = function() {
    const { __validator, ...data } = this.toObject();
    return data;
}
module.exports = model('character', characterSchema);