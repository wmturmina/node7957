const express = require('express')
const port = 8443

const app = express()

const home = (request, response) => {
  response.end('<h1>HOME NEW</h1>')
}
const produtos = (request, response) => {
  response.end('<h1>Lista de produtos NEW</h1>')
}

app.get('/', home)
app.get('/produtos', produtos)

const retornoSubirOServidor = () => {
  console.log(`
        Servidor subiu na porta ${port}
        Pressione CTRL+C para derrubar
        http://localhost:${port}
    `)
}
app.listen(port, retornoSubirOServidor)