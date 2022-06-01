const { response, request } = require('express');

const Specie = require('../models/specie');
const Character = require('../models/character');
const Film = require('../models/film');

const getAll = async(req,res) => {
    const[species] = await Promise.all([
        Specie.find({}, { name: 1, photo: 1 })
    ]);

    res.status(200).json(species)
}

const getByName = async(req, res) => {
    var specie = await Specie.findOne({ name: req.params.name })

    console.log(specie)

    const[characters] = await Promise.all([
        Character.find({ name: { $in: specie.related_characters }})
    ]);

    const[relatedFilms] = await Promise.all([
        Film.find({ name: { $in: specie.related_films }})
    ]);

    console.log(relatedFilms)

    Object.assign(specie.related_films = relatedFilms);
    Object.assign(specie.related_characters = characters);

    if(specie != null) {
        res.status(200).json(specie)
    } else {
        res.status(404).json({
            message: 'The specie ' + req.params.name + ' not found'
        })
    }
}


module.exports = {
    getAll,
    getByName
}