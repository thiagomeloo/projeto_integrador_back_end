
module.exports = {

    async all(req, res){
        const con = require('../database/conexao')
        await con('clientes')

        .then(clientes =>{

            return res.status(200).json({ clientes })
             
        })
        .catch(erro => {

            return res.status(500).json({message:'não foi possivel executar a operação!'})
        
        })
    },

    async create(req,res){
        //consulta banco usuario
        const con = require('../database/conexao')
        
        cliente = req.body
        await con('clientes').insert(cliente)
        .then(cliente =>{

            return res.status(200).json({message:"cliente criado com sucesso", cliente })
        
        }).catch(erro =>{

            return res.status(500).json({message:'não foi possivel executar a operação!'})
        
        })

    }

}