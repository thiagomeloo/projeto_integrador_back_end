module.exports = {
    async create(req, res){
        
        try {
            
            const userService = require('../services/userService')
            const response = await userService.create(req,res)
            return res.status(201).json(response)
            
        } catch (e) {

            return 
        }

    }


  }