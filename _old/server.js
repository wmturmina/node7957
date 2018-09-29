const http = require('http')
const port = 8443

const lidaComRequests = (request, response) => {
  /*
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
  */
  const metodos = []
  const urlsGet = []
  urlsGet['/'] = '<h1>Home</h1>'
  urlsGet['/produtos'] = '<h1>Lista de produtos</h1>'
  metodos['GET'] = urlsGet
  if (metodos[request.method][request.url]){
    response.end(metodos[request.method][request.url])
  } else {
    response.writeHead(404)
    response.end('Página não encontrada')
  }
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