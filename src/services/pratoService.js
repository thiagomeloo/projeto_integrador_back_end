
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

    },
    async update(req,res){
        const changes = req.body
        const con = require('../database/conexao')
        const prato_codigo = changes.prato_codigo
        delete changes.prato_codigo
        return con('pratos').where({prato_codigo})
        .update(changes)
       .then(prato =>{
           
           if(prato){
                return res.status(200).json({message:'prato atualizado com sucesso!'}) 
           }else{
                return res.status(200).json({message:'registro não encontrado!'})
           }
       })
       .catch(erro =>{
           return res.status(200).json({message:'não foi possivel executar a operação!'})
       })
    },
    async findByRestaurante(req, res) {
        const con = require('../database/conexao')
        const restaurante_codigo = req.body.restaurante_codigo

        await con('pratos').where({prato_restaurante_codigo : restaurante_codigo })
            
            .then(pratos => {
                if (pratos) {

                    return res.status(200).json({ pratos })

                } else {

                    return res.status(200).json({notExist:true, message: 'registro não encontrado!' })

                }
            })
            .catch(erro => {
                return res.status(200).json({ message: 'não foi possivel executar a operação!' })
            })
    },

}