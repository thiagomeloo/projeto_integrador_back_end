module.exports = {
    
    async all(req, res){
        
        try {
            
            const mesaService = require('../services/mesaService')
            const response = await mesaService.all(req,res)
            return res.status(201).json(response)
            
        } catch (e) {

            return 
        }

    },
    
    async create(req, res){
        
        try {
            
            const mesaService = require('../services/mesaService')
            const response = await mesaService.create(req,res)
            

            return res.status(201).json(response)
            
        } catch (e) {

            return 
        }

    }


  }