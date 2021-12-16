const mysql = require('mysql')
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '479856aa',
    porta: 3306,
    database: 'db_banco'
})

conexao.connect((erro)=>{
    if(erro)throw erro
    console.log('Conexão bem sucedida!')
})

module.exports = conexao