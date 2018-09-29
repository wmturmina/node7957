const http = require('http')
const port = 8443

const lidaComRequests = (request, response) => {
    console.log('Servidor')
    response.end('alo alo w brazil')
}
const retornoSubirOServidor = () => {
    console.log(`
        Servidor subiu na porta ${port}
        Pressione CTRL+C para derrubar
        http://localhost:${port}
    `)
}
const server = http.createServer(lidaComRequests)
server.listen(port, retornoSubirOServidor)