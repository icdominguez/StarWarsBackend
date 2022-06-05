const { response, request } = require('express');

const Character = require('../models/character');
const Film = require('../models/film');
const Vehicle = require('../models/vehicle')
const Starship = require('../models/starship');

const getAll = async(req, res) => {
    const[character] = await Promise.all([
        Character.find({},{ name: 1, photo: 1 })
    ]);

    const count = await Character.find({}).count()

    //res.status(200).json({
    //    'count': count,
    //    'results': character
    //});

    res.status(200).json(character)
}

const getByName = async(req, res) => {

    var character = await Character.findOne({ name:req.params.name })

    if(character != null) {
        res.status(200).json(character)
    } else {
        res.status(404).json({
            message: 'The character ' + req.params.name + ' not found'
        })
    }
}

module.exports = {
    getAll,
    getByName
}