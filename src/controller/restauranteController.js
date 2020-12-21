module.exports = {
    
    async all(req, res){
        
        try {
            
            const restauranteService = require('../services/restauranteService')
            const response = await restauranteService.all(req,res)
            return response
            
        } catch (e) {

            return 
        }

    },
    
    async create(req, res){
        
        try {
            
            const restauranteService = require('../services/restauranteService')
            const response = await restauranteService.create(req,res)
            

            return response
            
        } catch (e) {

            return 
        }

    },

    async findByEmail(req, res) {

        try {

            const restauranteService = require('../services/restauranteService')
            const response = await restauranteService.findByEmail(req, res)

            return response

        } catch (e) {

            return
        }

    },

    async update(req, res) {

        try {

            const restauranteService = require('../services/restauranteService')
            const response = await restauranteService.update(req, res)

            return response

        } catch (e) {

            return
        }

    },

  }