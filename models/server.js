const express = require('express')
const cors = require('cors');
require('dotenv').config()

class Server{
    constructor(){

        this.app = express()
        this.port = process.env.PORT
        this.paths = {
            auth: '/api/auth'
        }

        //Conectarse a la bd
        this.conectarDB();

        //Middlewares = acciones que siempre se haran al correr el server
        this.middlewares();
        
        //Rutas de la app
        this.routes();
    }
    
    middlewares(){
        //Cors
        this.app.use(cors());
        
        //Analiza las solicitudes entrantes con cargas JSON y se basa en body-parser .
        this.app.use(express.json())
        
        //Directorio publico
        this.app.use(express.static('public'));
    }

    conectarDB(){
    
    }

    routes(){
        this.app.use(this.paths.auth, require('../routes/auth'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        })
    }
}

module.exports = Server;