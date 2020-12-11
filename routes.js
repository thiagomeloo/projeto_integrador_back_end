const express = require('express')

const routes = express.Router()

//importacao dos controllers

const u = require('./src/controller/userController')

//rotas
routes.get('/', u.create)



module.exports = routes