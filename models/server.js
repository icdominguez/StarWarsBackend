const express = require('express')
const cors = require('cors');
const dbConnection = require('../database/config')

class Server {
    
    constructor() {
        this.app = express()
        this.port = 8080

        this.charactersPath = '/api/characters'
        this.filmsPath = '/api/films'
        this.planetsPath = '/api/planets'
        this.speciesPath = '/api/species'
        this.starshipsPath = '/api/starships'
        this.vehiclesPath = '/api/vehicles'

        this.connectBBDD()
        this.middlewares()
        this.routes()

    }

    async connectBBDD() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(cors())
    }

    routes() {
        this.app.get('/', (req, res) => {
            res.send('Welcome to the Star Wars API by icdominguez');
        })

        this.app.use(this.charactersPath, require('../routes/characters'));
        this.app.use(this.filmsPath, require('../routes/films'));
        this.app.use(this.planetsPath, require('../routes/planets'));
        this.app.use(this.speciesPath, require('../routes/species'));
        this.app.use(this.starshipsPath, require('../routes/starships'));
        this.app.use(this.vehiclesPath, require('../routes/vehicles'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port)
        });
    }
}

module.exports = Server