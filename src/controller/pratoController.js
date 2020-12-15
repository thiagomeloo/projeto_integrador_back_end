module.exports = {
    
    async all(req, res){
        
        try {
            
            const pratoService = require('../services/pratoService')
            const response = await pratoService.all(req,res)
            return res.status(201).json(response)
            
        } catch (e) {

            return 
        }

    },
    
    async create(req, res){
        
        try {
            
            const pratoService = require('../services/pratoService')
            const response = await pratoService.create(req,res)
            

            return res.status(201).json(response)
            
        } catch (e) {

            return 
        }

    }


  }