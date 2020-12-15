const express = require('express')

const routes = express.Router()

//importacao dos controllers
const clienteController = require('./src/controller/clienteController')
const restauranteController = require('./src/controller/restauranteController')
const pratoController = require('./src/controller/pratoController')
const mesaController = require('./src/controller/mesaController')




//rotas
routes.get('/',()=>{return console.log('teste') })

//rotas cliente
routes.get('/cliente/all', clienteController.all)
routes.post('/cliente/create', clienteController.create)
routes.get('/cliente/findByEmail/:email', clienteController.findByEmail)


//rotas restaurante
routes.get('/restaurante/all', restauranteController.all)
routes.post('/restaurante/create', restauranteController.create)
routes.get('/restaurante/findByEmail/:email', restauranteController.findByEmail)


//rotas prato
routes.get('/prato/all', pratoController.all)
routes.post('/prato/create', pratoController.create)

//rotas mesa
routes.get('/mesa/all', mesaController.all)
routes.post('/mesa/create', mesaController.create)

routes.get("/*", function(req, res){
    return res.json({"response":"rota não existe"})
})

module.exports = routes