const { findByEmail } = require('../controller/clienteController')

module.exports = {

    async all(req, res) {
        const con = require('../database/conexao')
        await con('clientes')

            .then(clientes => {

                return res.status(200).json({ clientes })

            })
            .catch(erro => {

                return res.status(500).json({ message: 'não foi possivel executar a operação!' })

            })
    },

    async create(req, res) {
        //consulta banco usuario
        const con = require('../database/conexao')

        cliente = req.body
        await con('clientes').insert(cliente)
            .then(cliente => {
                let cliente = cliente[0]
                
                return res.status(200).json({ message: "cliente criado com sucesso", cliente })

            }).catch(erro => {

                return res.status(500).json({ message: 'não foi possivel executar a operação!' })

            })

    },
    async findByEmail(req, res) {
        const con = require('../database/conexao')
        const email = req.body.email

        await con('clientes').where({cliente_email : email })
            .first()
            .then(cliente => {
                if (cliente) {
                    return res.status(200).json({ cliente })

                } else {

                    return res.status(200).json({notExist:true, message: 'registro não encontrado!' })

                }
            })
            .catch(erro => {
                return res.status(200).json({ message: 'não foi possivel executar a operação!' })
            })
    }

}