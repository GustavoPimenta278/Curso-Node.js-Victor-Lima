let http = require('http')

function openServer(porta) {
    console.log(`Servidor sendo criado na porta ${porta}`)

    http.createServer((req, res) => {res.end("Server liberado!")}).listen(porta)
    
    console.log(`Servidor rodando na porta ${porta}!`)


}

openServer(8023)

