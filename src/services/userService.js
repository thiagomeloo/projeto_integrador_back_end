
module.exports = {

    async create(req,res){
        //consulta banco usuario
        const con = require('../database/conexao')
        
        name = req.params.name
        console.log({name})
        await con('user').insert({name})
        .then(user =>{
            return res.status(200).json({ user })
        }).catch(erro =>{
            console.log(erro)
            return res.status(500).json({message:'não foi possivel executar a operação!'})
        })
        
        //return { response: req.name + ' criado com sucesso.'}; 


    }

}