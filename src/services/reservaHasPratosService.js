
module.exports = {

    async all(req, res){
        const con = require('../database/conexao')
        await con('reservas_has_pratos')

        .then(reservasHasPratos =>{

            return res.status(200).json({ reservasHasPratos })
             
        })
        .catch(erro => {

            return res.status(200).json({message:'não foi possivel executar a operação!'})
        
        })
    },

    async create(req,res){
        //consulta banco usuario
        const con = require('../database/conexao')
        
        reservaHasPratos = req.body
        console.log(req)
        await con('reservas_has_pratos').insert(reservaHasPratos)
        .then(reservaHasPratos =>{
            let reserva_has_prato_codigo = reservaHasPratos[0]
            return res.status(200).json({message:"reservaHasPratos criada com sucesso", reserva_has_prato_codigo })
        
        }).catch(erro =>{
            console.log(erro)
            return res.status(200).json({message:'não foi possivel executar a operação!'})
        
        })

    },

}