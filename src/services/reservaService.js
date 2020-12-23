
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

    async create(req,res){
        //consulta banco usuario
        const con = require('../database/conexao')
        
        reserva = req.body
        await con('reservas').insert(reserva)
        .then(reserva =>{
            let reserva_codigo = reserva[0]
            return res.status(200).json({message:"reserva criada com sucesso", reserva_codigo })
        
        }).catch(erro =>{

            return res.status(200).json({message:'não foi possivel executar a operação!'})
        
        })

    },

    async findByCliente(req, res) {
        const con = require('../database/conexao')
        const cliente_codigo = req.body.cliente_codigo

        await con('reservas').where({reserva_cliente_codigo : cliente_codigo })
            
            .then(reservas => {
                if (reservas) {
                    
                    return res.status(200).json({ reservas })

                } else {

                    return res.status(200).json({notExist:true, message: 'registro não encontrado!' })

                }
            })
            .catch(erro => {
                return res.status(200).json({ message: 'não foi possivel executar a operação!' })
            })
    },

    async findByRestaurante(req, res) {
        const con = require('../database/conexao')
        const restaurante_codigo = req.body.restaurante_codigo

        await con('reservas').where({reserva_restaurante_codigo : restaurante_codigo })
            
            .then(reservas => {
                if (reservas) {
                    
                    return res.status(200).json({ reservas })

                } else {

                    return res.status(200).json({notExist:true, message: 'registro não encontrado!' })

                }
            })
            .catch(erro => {
                return res.status(200).json({ message: 'não foi possivel executar a operação!' })
            })
    },

}