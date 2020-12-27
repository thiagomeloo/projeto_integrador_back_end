module.exports = {
    
    async all(req, res){
        
        try {
            
            const reservaHasPratosService = require('../services/reservaHasPratosService')
            const response = await reservaHasPratosService.all(req,res)
            return response
            
        } catch (e) {

            return 
        }

    },
    async create(req, res){
        
        try {
            
            const reservaHasPratosService = require('../services/reservaHasPratosService')
            const response = await reservaHasPratosService.create(req,res)
            

            return response
            
        } catch (e) {

            return 
        }

    },

  }