
module.exports = {

    async all(req, res){
        const con = require('../database/conexao')
        await con('mesas')

        .then(mesas =>{

            return res.status(200).json({ mesas })
             
        })
        .catch(erro => {

            return res.status(500).json({message:'não foi possivel executar a operação!'})
        
        })
    },

    async create(req,res){
        //consulta banco usuario
        const con = require('../database/conexao')
        
        mesa = req.body
        await con('mesas').insert(mesa)
        .then(mesa =>{

            return res.status(200).json({message:"mesa criada com sucesso", mesa })
        
        }).catch(erro =>{

            return res.status(500).json({message:'não foi possivel executar a operação!'})
        
        })

    }

}