const express = require('express');

const cors = require('cors');
const dbConnection = require('../database/config');

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

class Server {
    
    constructor() {
        this.app = express()
        this.port = process.env.PORT

        this.defaultPath = '/api'
        this.charactersPath = `${this.defaultPath}/characters`
        this.filmsPath = `${this.defaultPath}/films`
        this.planetsPath = `${this.defaultPath}/planets`
        this.speciesPath = `${this.defaultPath}/species`
        this.starshipsPath = `${this.defaultPath}/starships`
        this.vehiclesPath = `${this.defaultPath}/vehicles`

        this.middlewares();
        this.routes();
        this.connectBBDD();

    }

    async connectBBDD() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {

        this.app.use(this.charactersPath, require('../routes/characters'));
        this.app.use(this.filmsPath, require('../routes/films'));
        this.app.use(this.planetsPath, require('../routes/planets'));
        this.app.use(this.speciesPath, require('../routes/species'));
        this.app.use(this.starshipsPath, require('../routes/starships'));
        this.app.use(this.vehiclesPath, require('../routes/vehicles'));

        swaggerDocument.host = process.env.HOST;

        if(process.env.HOST == "localhost:3000") {
            swaggerDocument.schemes = ["http"]
        } else {
            swaggerDocument.schemes = ["https"]
        }

        this.app.use(this.defaultPath, swaggerUI.serve, swaggerUI.setup(swaggerDocument));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port)
        });
    }
}

module.exports = Server