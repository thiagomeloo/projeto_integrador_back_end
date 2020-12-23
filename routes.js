const express = require('express')

const routes = express.Router()

//importacao dos controllers
const clienteController = require('./src/controller/clienteController')
const restauranteController = require('./src/controller/restauranteController')
const pratoController = require('./src/controller/pratoController')
const mesaController = require('./src/controller/mesaController')
const reservaController = require('./src/controller/reservaController')




//rotas
routes.get('/',()=>{return console.log('teste') })

//rotas cliente
routes.get('/cliente/all', clienteController.all)
routes.post('/cliente/create', clienteController.create)
routes.post('/cliente/update', clienteController.update)
routes.post('/cliente/findByEmail', clienteController.findByEmail)


//rotas restaurante
routes.get('/restaurante/all', restauranteController.all)
routes.post('/restaurante/create', restauranteController.create)
routes.post('/restaurante/update', restauranteController.update)
routes.post('/restaurante/findByEmail', restauranteController.findByEmail)


//rotas prato
routes.get('/prato/all', pratoController.all)
routes.post('/prato/create', pratoController.create)
routes.post('/prato/update', pratoController.update)
routes.post('/prato/findByRestaurante', pratoController.findByRestaurante)



//rotas mesa
routes.get('/mesa/all', mesaController.all)
routes.post('/mesa/create', mesaController.create)
routes.post('/mesa/update', mesaController.update)
routes.post('/mesa/findByRestaurante', mesaController.findByRestaurante)
routes.post('/mesa/findByRestaurante/disponivel', mesaController.findByRestauranteDisponivel)
routes.post('/mesa/findByRestaurante/disponivel/filter/qtdPessoa', mesaController.findByRestauranteDisponivelFilterQtdPessoa)


//rotas reserva
routes.get('/reserva/all',  reservaController.all)
routes.post('/reserva/create',  reservaController.create)
routes.post('/reserva/update', reservaController.update)
routes.post('/reserva/findByCliente',  reservaController.findByCliente)
routes.post('/reserva/findByRestaurante',  reservaController.findByRestaurante)




routes.get("/*", function(req, res){
    return res.json({"response":"rota não existe"})
})

module.exports = routes