const express = require('express')

const routes = express.Router()

//importacao dos controllers
const clienteController = require('./src/controller/clienteController')
const restauranteController = require('./src/controller/restauranteController')
const pratoController = require('./src/controller/pratoController')



//rotas
routes.get('/',()=>{return console.log('teste') })

//rotas cliente
routes.get('/cliente/all', clienteController.all)
routes.post('/cliente/create', clienteController.create)

//rotas restaurante
routes.get('/restaurante/all', restauranteController.all)
routes.post('/restaurante/create', restauranteController.create)

//rotas prato
routes.get('/prato/all', pratoController.all)
routes.post('/prato/create', pratoController.create)

module.exports = routes