module.exports = {
    
    async all(req, res){
        
        try {
            
            const restauranteService = require('../services/restauranteService')
            const response = await restauranteService.all(req,res)
            return res.status(201).json(response)
            
        } catch (e) {

            return 
        }

    },
    
    async create(req, res){
        
        try {
            
            const restauranteService = require('../services/restauranteService')
            const response = await restauranteService.create(req,res)
            

            return res.status(201).json(response)
            
        } catch (e) {

            return 
        }

    }


  }