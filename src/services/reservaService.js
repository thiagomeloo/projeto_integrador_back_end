
module.exports = {

    async all(req, res){
        const con = require('../database/conexao')
        await con('reservas')

        .then(reservas =>{

            return res.status(200).json({ reservas })
             
        })
        .catch(erro => {

            return res.status(200).json({message:'não foi possivel executar a operação!'})
        
        })
    },

}