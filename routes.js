const express = require('express')

const routes = express.Router()

//importacao dos controllers
const userController = require('./src/controller/userController')

//rotas
routes.get('/user/create/:name/', userController.create)



module.exports = routes