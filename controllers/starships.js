const { response, request } = require('express');

const Starship = require('../models/starship');
const Character = require('../models/character');
const Film = require('../models/film')

const getAll = async(req, res) => {

    const[starships] = await Promise.all([
        Starship.find({}, {name:1, photo:1})
    ]);

    res.status(200).json(starships);
}

const getByName = async(req, res) => {

    const starship = await Starship.findOne({ name: req.params.name });

    const[pilots] = await Promise.all([
        Character.find({ name: { $in: starship.pilots }})
    ]);

    const[relatedFilms] = await Promise.all([
        Film.find({ name: { $in: starship.relatedFilms }})
    ]);

    Object.assign(starship.pilots = pilots);
    Object.assign(starship.relatedFilms = relatedFilms);

    if(starship != null) {
        res.status(200).json(starship)
    } else {
        res.status(404).json({
            message: 'The starship ' + req.params.name + ' not found'
        });
    }

}

module.exports = {
    getAll,
    getByName
}