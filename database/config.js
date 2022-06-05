const mongoose = require('mongoose')

const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.MONGO_CNN/*"mongodb://localhost:27017/starwars"*/)
    } catch(error) {
        console.log(error)
        throw new Error('There was an error connecting to the database')
    }

}

module.exports = dbConnection