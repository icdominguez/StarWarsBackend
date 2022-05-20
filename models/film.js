const { Schema, model } = require('mongoose');

const filmSchema = Schema({
    name: {
        type: String
    },
    date_created: {
        type: String
    },
    director: {
        type: String
    },
    'producer(s)': {
        type: []
    },
    opening_crawl: {
        type: String
    },
    photo: {
        type: String
    }
});

filmSchema.methods.toJSON = function() {
    const { __validator, ...data } = this.toObject();
    return data;
}
module.exports = model('film', filmSchema);