const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGO_CNN)
    } catch(error) {
        console.log(error)
        throw new Error('There was an error connecting to the database')
    }
}

module.exports = dbConnection