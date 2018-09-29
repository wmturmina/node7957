const http = require('http')

const lidaComRequests = (request, response) => {
    console.log('Servidor')
    response.end('alo alo w brazil')
}

const server = http.createServer(lidaComRequests)

server.listen(8443)