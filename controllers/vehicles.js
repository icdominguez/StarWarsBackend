const { response, request } = require('express');

const Vehicle = require('../models/vehicle');

const getAll = async(req, res) => {

    try{
        const[vehicle] = await Promise.all([
            Vehicle.find({}, {name : 1, photo: 1})
        ]);

        res.status(200).json(vehicle)

    } catch(e) {
        res.status(500).json(e)
        console.log(e)
    }

}

const getByName = async(req, res) => {

    console.log("Vehicle received: " + req.params.name)

    var vehicle = await Vehicle.findOne({name : req.params.name})

    /*const [films] = await Promise.all([
        Film.find({ name: { $in: vehicle.related_films }})
    ]);

    const [characters] = await Promise.all([
        Character.find({ name: { $in: vehicle.related_pilots }})
    ])

    Object.assign(vehicle.related_films, films)
    Object.assign(vehicle.related_pilots, characters)*/

    if(vehicle != null) {
        res.status(200).json(vehicle)
    } else {
        res.status(404).json({
            message: 'The vehicle ' + name + ' not found'
        })
    }
}

module.exports = {
    getAll,
    getByName
}