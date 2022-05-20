const { response, request } = require('express');

const Film = require('../models/film')

const getAll = async(req, res) => {
    const[film] = await Promise.all([
        Film.find()
    ]);
    
    res.status(200).json(film)
}

module.exports = {
    getAll
}