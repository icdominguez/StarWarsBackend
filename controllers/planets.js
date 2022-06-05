const { response, request } = require('express');

const Planet = require('../models/planet');
const Character = require('../models/character');
const Film = require('../models/film');

const getAll = async(req,res) => {
    const[planets] = await Promise.all([
        Planet.find({}, { name: 1, photo: 1 })
    ]);

    res.status(200).json(planets)
}

const getByName = async(req, res) => {
    var planet = await Planet.findOne({ name: req.params.name })

    if(planet != null) {
        res.status(200).json(planet)
    } else {
        res.status(404).json({
            message: 'The planet ' + req.params.name + ' not found'
        })
    }
}

module.exports = {
    getAll,
    getByName
}