const rotas = require('express').Router()
const conexao = require('./config/conexao')

 
rotas.get('/', (req,res)=>{
    let sql = 'select * from tb_transacao'
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro)throw erro
        res.json(rows)
    })
})

rotas.get('/:id', (req,res)=>{
    const {id} = req.params
    let sql = 'select * from tb_transacao where id_transacao = ?'
    conexao.query(sql,[id], (erro,rows,fields)=>{
        if(erro)throw erro
        res.json(rows[0])
    })
})

rotas.delete('/:id', (req,res)=>{
    const {id} = req.params
    let sql = `delete from tb_transacao where id_transacao= ${id}`
    conexao.query(sql,(erro,row,fields)=>{
        if(erro)throw erro
        res.json({status: 'Conta excluída com sucesso!'})
    }) 
})

rotas.post('/',(req,res)=>{
    const {nomeCliente,valor,tipoConta,agencia,conta} = req.body
    let sql = `insert into tb_transacao (nomeCliente, valor, tipoConta, agencia, conta) values ('${nomeCliente}', '${valor}','${tipoConta}', '${agencia}', '${conta}')`
    conexao.query(sql,(erro, rows, fields)=>{
        if(erro)throw erro
        res.json({status: 'Conta incluída com sucesso!'})
    })
})

rotas.put('/:id', (req,res)=>{
    const {id} = req.params
    const {nomeCliente, valor, tipoConta, agencia, conta} = req.body
    let sql = `update tb_transacao set           
                    nomeCliente = '${nomeCliente}',
                    valor = '${valor}',
                    tipoConta = '${tipoConta}',
                    agencia = '${agencia}',
                    conta = '${conta}'
                where id_transacao = '${id}'`
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro)throw erro
        res.json({status:'Conta editada com sucesso!'})
    })
})

module.exports = rotas