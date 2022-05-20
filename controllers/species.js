const { response, request } = require('express');

const Specie = require('../models/specie');

const getAll = async(req,res) => {
    const[species] = await Promise.all([
        Specie.find()
    ]);

    res.status(200).json(species)
}

module.exports = {
    getAll
}