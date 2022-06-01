const { response, request } = require('express');

const Film = require('../models/film')

const getAll = async(req, res) => {
    const[film] = await Promise.all([
        Film.find({}, { name: 1, photo: 1 })
    ]);
    
    res.status(200).json(film)
}

const getByName = async(req, res) => {
    var film = await Film.findOne({ name: req.params.name })
    
    if(film != null) {
        res.status(200).json(film)
    } else {
        res.status(404).json({
            message: 'The film ' + req.params.name + ' not found'
        })
    }
}

module.exports = {
    getAll,
    getByName
}