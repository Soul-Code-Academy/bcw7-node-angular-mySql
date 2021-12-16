require('./config/conexao')
const express = require('express')
const app = express()
const porta = 3000

app.use(express.json())

const rotas = require('./rotas')
app.use('/tarefas', rotas)


app.listen(porta,()=>{
    console.log()
    console.log(`Servidor Rodando... Porta: ${porta}.`)
    console.log()
    console.log()
})

