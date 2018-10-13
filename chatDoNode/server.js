const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 3000

app.get('/', (request, response) => {
    response.render('home.ejs')
})

http.listen(port, () => {
    console.log(`
        APP Iniciado na porta: ${port}
    `)
})

io.on('connection', (socket) => {
    console.log('Usuário conectou')
    socket.on('CLIENT_SENDMESSAGE', (mensagem) => {
        io.emit('SERVER_SENDMESSAGE', mensagem)
    })
    socket.on('disconnect', () => {
        console.log('Usuário desconectou')
    })
})