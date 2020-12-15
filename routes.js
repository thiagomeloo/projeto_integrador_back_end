const express = require('express')

const routes = express.Router()

//importacao dos controllers
const clienteController = require('./src/controller/clienteController')

//rotas
routes.get('/',()=>{return console.log('teste') })

routes.get('/cliente/all', clienteController.all)
routes.post('/cliente/create', clienteController.create)



module.exports = routes