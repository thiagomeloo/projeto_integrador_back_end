
module.exports = {

    async all(req, res){
        const con = require('../database/conexao')
        await con('pratos')

        .then(pratos =>{

            return res.status(200).json({ pratos })
             
        })
        .catch(erro => {

            return res.status(500).json({message:'não foi possivel executar a operação!'})
        
        })
    },

    async create(req,res){
        //consulta banco usuario
        const con = require('../database/conexao')
        
        prato = req.body
        await con('pratos').insert(prato)
        .then(prato =>{

            return res.status(200).json({message:"prato criado com sucesso", prato })
        
        }).catch(erro =>{

            return res.status(500).json({message:'não foi possivel executar a operação!'})
        
        })

    }

}