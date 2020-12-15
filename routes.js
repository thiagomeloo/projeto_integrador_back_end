const express = require('express')

const routes = express.Router()

//importacao dos controllers
const clienteController = require('./src/controller/clienteController')
const restauranteController = require('./src/controller/restauranteController')


//rotas
routes.get('/',()=>{return console.log('teste') })

//rotas cliente
routes.get('/cliente/all', clienteController.all)
routes.post('/cliente/create', clienteController.create)

//rotas restaurante
routes.get('/restaurante/all', restauranteController.all)
routes.post('/restaurante/create', restauranteController.create)



module.exports = routes