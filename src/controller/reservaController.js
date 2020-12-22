module.exports = {
    
    async all(req, res){
        
        try {
            
            const reservaService = require('../services/reservaService')
            const response = await reservaService.all(req,res)
            return response
            
        } catch (e) {

            return 
        }

    },

  }