const { select } = require('../database/conexao')

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

    async findByReserva(req, res) {
        const con = require('../database/conexao')
        const reserva_codigo = req.body.reserva_codigo

        await con('reservas_has_pratos')
        .innerJoin('pratos', 'reservas_has_pratos.reserva_has_prato_prato_codigo', 'pratos.prato_codigo')
        .innerJoin('reservas', 'reservas_has_pratos.reserva_has_prato_reserva_codigo', 'reservas.reserva_codigo')
        .where({reserva_has_prato_reserva_codigo : reserva_codigo })
            
            .then(reservasHasPratos => {
                if (reservasHasPratos) {

                    return res.status(200).json({ reservasHasPratos })

                } else {

                    return res.status(200).json({notExist:true, message: 'registro não encontrado!' })

                }
            })
            .catch(erro => {
                return res.status(200).json({ message: 'não foi possivel executar a operação!' })
            })
    },

}