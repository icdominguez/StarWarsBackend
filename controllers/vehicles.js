const { response, request } = require('express');

const Vehicle = require('../models/vehicle');

const getAll = async(req, res) => {

    try{
        const[vehicle] = await Promise.all([
            Vehicle.find({}).sort({name : 0}).limit(10)
        ]);

        const count = await Vehicle.find().count()
            
        res.status(200).json({
            'count': count,
            'results': vehicle
        })

    } catch(e) {
        res.status(500).json(e)
        console.log(e)
    }

}

const getByPage = async(req, res) => {

    var page = new Number(req.params.page)

    var next = null
    var previous = null

    try {
        const[vehicle] = await Promise.all([
            Vehicle.find({}).sort({ name: 0 }).skip(10 * page).limit(10)
        ]);

        const count = await Vehicle.find({}).count()

        const countPrevious = await Vehicle.find({}).sort({ name: 0 }).skip(10 * page - 10).limit(10).count()
        const countNext = await Vehicle.find({}).sort({ name: 0 }).skip(10 * page + 10).limit(10).count()

        if(countNext > 0) {
            next = page += 1
            console.log(next)
        } else {
            next = null
        }

        if(countPrevious > 0) {
            previous = page - 1
            console.log('Previous vehicles: ' + previous)
        } else {
            previous = null
        }

        res.status(200).json({
            'count': count,
            'next': next,
            'previous': previous,
            'results': vehicle
        })

    } catch (e) {
        res.status(500).json(e)
        console.log(e)
    }

}

const getByName = async(req, res) => {
    var name = req.params.name

    const vehicle = await Vehicle.findOne({name : name})

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
    getByPage,
    getByName
}