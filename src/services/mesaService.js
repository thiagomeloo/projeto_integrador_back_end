const { findByRestauranteDisponivel } = require('../controller/mesaController')
const { andWhereNotBetween } = require('../database/conexao')

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

    },
    async update(req,res){
        const changes = req.body
        const con = require('../database/conexao')
        const mesa_codigo = changes.mesa_codigo
        delete changes.mesa_codigo
        return con('mesas').where({mesa_codigo})
        .update(changes)
       .then(mesa =>{
           
           if(mesa){
                return res.status(200).json({message:'mesa atualizada com sucesso!'}) 
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

        await con('mesas').where({mesa_restaurante_codigo : restaurante_codigo })
            
            .then(mesas => {
                if (mesas) {
                    
                    return res.status(200).json({ mesas })

                } else {

                    return res.status(200).json({notExist:true, message: 'registro não encontrado!' })

                }
            })
            .catch(erro => {
                return res.status(200).json({ message: 'não foi possivel executar a operação!' })
            })
    },
    async findByRestauranteDisponivel(req, res) {
        const con = require('../database/conexao')
        const restaurante_codigo = req.body.restaurante_codigo

        await con('mesas').where({mesa_restaurante_codigo : restaurante_codigo })
            .whereRaw('mesa_data_hora >= now()').orderBy('mesa_data_hora','asc')
            .then(mesas => {
                if (mesas) {
                    
                    return res.status(200).json({ mesas })

                } else {

                    return res.status(200).json({notExist:true, message: 'registro não encontrado!' })

                }
            })
            .catch(erro => {
                return res.status(200).json({ message: 'não foi possivel executar a operação!' })
            })
    },
}