
module.exports = {

    async all(req, res){
        const con = require('../database/conexao')
        await con('restaurantes')

        .then(restaurantes =>{

            return res.status(200).json({ restaurantes })
             
        })
        .catch(erro => {

            return res.status(500).json({message:'não foi possivel executar a operação!'})
        
        })
    },

    async create(req,res){
        //consulta banco usuario
        const con = require('../database/conexao')
        
        restaurante = req.body
        await con('restaurantes').insert(restaurante)
        .then(restaurante=>{

            return res.status(200).json({message:"restaurante criado com sucesso", restaurante })
        
        }).catch(erro =>{

            return res.status(500).json({message:'não foi possivel executar a operação!'})
        
        })

    },
    async findByEmail(req, res) {
        const con = require('../database/conexao')
        const email = req.params.email

        await con('restaurantes').where({restaurante_email : email })
            .first()
            .then(restaurante => {
                if (restaurante) {

                    return res.status(200).json({ restaurante })

                } else {

                    return res.status(404).json({ message: 'registro não encontrado!' })

                }
            })
            .catch(erro => {
                return res.status(500).json({ message: 'não foi possivel executar a operação!' })
            })
    }

}