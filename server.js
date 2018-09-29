const http = require('http')
const port = 8443

const lidaComRequests = (request, response) => {
  switch (request.url) {
    case '/':
      response.end('<h1>Home</h1>')
      break
    case '/produtos':
      response.end('<h1>Lista de produtos</h1>')
      break
    default:
      response.writeHead(404)
      response.end('Página não encontrada')
  }
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