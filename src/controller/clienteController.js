module.exports = {
    
    async all(req, res){
        
        try {
            
            const clienteService = require('../services/clienteService')
            const response = await clienteService.all(req,res)
            return res.status(201).json(response)
            
        } catch (e) {

            return 
        }

    },
    
    async create(req, res){
        
        try {
            
            const clienteService = require('../services/clienteService')
            const response = await clienteService.create(req,res)
            

            return res.status(201).json(response)
            
        } catch (e) {

            return 
        }

    }


  }